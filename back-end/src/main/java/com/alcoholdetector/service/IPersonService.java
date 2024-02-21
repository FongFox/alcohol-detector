package com.alcoholdetector.service;

import java.util.List;

import com.alcoholdetector.model.Person;

public interface IPersonService {
	public List<Person> getAll();

	public Person getById(int id);

	public boolean save(Person tempPerson);
}
