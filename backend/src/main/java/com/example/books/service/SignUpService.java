package com.example.books.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.entity.SignUpEntity;
import com.example.books.repository.SignUpRepoint;


@Service
public class SignUpService implements SignUpServiceint {

	@Autowired
	public SignUpRepoint sur;
	@Override
	public List<SignUpEntity> getdetails() {
		return sur.findAll();
	}

	@Override
	public void savedetails(SignUpEntity su) {
		 sur.save(su);
	}

	@Override
	public String updatedetails(SignUpEntity su) {
		sur.save(su);
	    return "updated";
	}

	@Override
	public String deletedetails(String username) {
		sur.deleteById(username);
		return username+" has been deleted";
	}

	@Override
	public boolean checkusername(String name) {
		
		return sur.existsById(name);
	}

	@Override
	public boolean checkemail(String email) {
		return sur.existsByemail(email);
	}
   
}
