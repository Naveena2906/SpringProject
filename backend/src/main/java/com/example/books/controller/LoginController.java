package com.example.books.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.books.entity.LoginEntity;
import com.example.books.service.LoginService;
@CrossOrigin("*")
@RestController
public class LoginController {
    @Autowired
    public LoginService ls;
    @GetMapping("/get/login")
    public List<LoginEntity> getData()
    {
       return ls.getdata();
    }
    @GetMapping("/get/loginbyemail")
    public String login(@RequestParam String email,@RequestParam 	String password)
    {
    	List<LoginEntity> ob=new ArrayList<>();
    	ob=ls.findByEmailAndPassword(email, password);
    	if(ob.isEmpty())
    	{
    		return "Login failed";
    	}
    	else
    	{
    		return "Login Success";
    	}
    }
}
