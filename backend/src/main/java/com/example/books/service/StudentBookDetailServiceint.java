package com.example.books.service;

import java.util.List;

import com.example.books.entity.StudentBookDetailsEntity;

public interface StudentBookDetailServiceint {
	public List<StudentBookDetailsEntity> getStudentDetails();
	  public void savedata(StudentBookDetailsEntity sbde);
	  public void updatedata(StudentBookDetailsEntity sbde);
	  public void deletedata(int id);
}
