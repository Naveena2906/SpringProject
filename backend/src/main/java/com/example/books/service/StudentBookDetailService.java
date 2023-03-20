package com.example.books.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.entity.StudentBookDetailsEntity;
import com.example.books.repository.StudentBookDetailRepoint;

@Service
public class StudentBookDetailService implements StudentBookDetailServiceint {
      
	@Autowired
	public StudentBookDetailRepoint sbdr;
	@Override
	public List<StudentBookDetailsEntity> getStudentDetails() {
		return sbdr.findAll();
	}

	@Override
	public void savedata(StudentBookDetailsEntity sbdm) {
		sbdr.save(sbdm);
	}

	@Override
	public void updatedata(StudentBookDetailsEntity sbm) {
		sbdr.save(sbm);
		
	}

	@Override
	public void deletedata(int id) {
		sbdr.deleteById(id);
		
	}

}
