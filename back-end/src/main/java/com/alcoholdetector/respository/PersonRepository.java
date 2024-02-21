package com.alcoholdetector.respository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;

import com.alcoholdetector.model.Person;

public interface PersonRepository extends JpaRepository<Person, Integer>{
//	@Query("SELECT p FROM Person p WHERE p.id = :id")
//	public Person getById(@Param("id") int id);
}
