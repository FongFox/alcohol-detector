package com.alcoholdetector.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alcoholdetector.model.Person;
import com.alcoholdetector.service.IPersonService;

@RestController
@RequestMapping("/api/v1/persons")
@CrossOrigin()
public class PersonController {
	@Autowired
	private IPersonService service;
	
	@GetMapping("")
	public List<Person> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public Person getById(@PathVariable("id") int id) {
		return service.getById(id);
	}
	
	@PostMapping("")
	public boolean save(@RequestBody Person tempPerson) {
		return service.save(tempPerson);
	}
}
