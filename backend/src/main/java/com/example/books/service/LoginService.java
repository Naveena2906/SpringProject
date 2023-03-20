package com.example.books.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.entity.LoginEntity;
import com.example.books.repository.LoginRepoint;


@Service
public class LoginService implements LoginServiceint {

	@Autowired
	public LoginRepoint lri;
	@Override
	public List<LoginEntity> getdata() {
		return lri.findAll();
	}
	@Override
	public List<LoginEntity> findByEmailAndPassword(String email, String password) {
		return lri.findByEmailAndPassword(email, password);
	}

	
     
}
