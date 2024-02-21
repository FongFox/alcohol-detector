package com.alcoholdetector.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alcoholdetector.model.Person;
import com.alcoholdetector.respository.PersonRepository;
import com.fazecast.jSerialComm.SerialPort;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PersonService implements IPersonService{
	private final double normalValue = 0.8;

	private PersonRepository repository;
	private SerialPort serialPort;

	public PersonService(PersonRepository repository, SerialPort serialPort) {
		super();
		this.repository = repository;
		this.serialPort = serialPort;
	}

	private double handleGetAlcoholValue() {
		double alcoholValue = 0.0;

		while (alcoholValue == 0) {
			if (serialPort.isOpen()) {
//				System.out.println("Detecting !!!");
				int bytesAvailable = serialPort.bytesAvailable();
				if (bytesAvailable > 0) {
					byte[] buffer = new byte[bytesAvailable];
					int bytesRead = serialPort.readBytes(buffer, buffer.length);
					String data = new String(buffer, 0, bytesRead);
					if (data.startsWith("send:")) {
						String[] parts = data.split(":");
						if (parts.length == 2) {
							String tempAlcoholValue = parts[1];
							alcoholValue = Double.parseDouble(tempAlcoholValue);
							System.out.println("Receive Alcohol Value: " + tempAlcoholValue);
						}
					}
				}
			}
		}

		return alcoholValue;
	}

	@Override
	public List<Person> getAll() {
		return repository.findAll();
	}
	
	@Override
	public Person getById(int id) {		
		Person person = repository.getReferenceById(id);
		
		return person;
	}

	@Override
	public boolean save(Person tempPerson) {
		Person person = new Person(tempPerson.getIdCard(), tempPerson.getDriverLicense(), tempPerson.getFullName());

		double tempAlcoholValue = handleGetAlcoholValue();

//		int retryCounter = 0;
//		while(tempAlcoholValue == 0) {
//			System.out.println("Retry: " + (retryCounter++) + " !!!" );
//			tempAlcoholValue = handleGetAlcoholValue();
//		}

		person.setId(0);
		person.setAlcoholValue(tempAlcoholValue);
		person.setIsDrunk(tempAlcoholValue > normalValue ? true : false);

		repository.save(person);

		return true;
	}
}
