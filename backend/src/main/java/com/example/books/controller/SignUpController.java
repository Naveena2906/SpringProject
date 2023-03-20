package com.example.books.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.books.entity.SignUpEntity;
import com.example.books.service.SignUpService;
@CrossOrigin("*")
@RestController
public class SignUpController {
  @Autowired
  public SignUpService sus;
   @GetMapping("/get/signup")
   public List<SignUpEntity> getDetails()
   {
	   return sus.getdetails();
   }
   @PostMapping("/save/signup")
   public String save(@RequestBody SignUpEntity sue)
   {
	   boolean user=sus.checkusername(sue.getUsername());
	   boolean email=sus.checkemail(sue.getEmail());
	   if(user)
	   {
		   return "username already exists";
	   }
	   else if(email) {
		   return "email already exists";
	   }
	   else
	   {
		   sus.savedetails(sue);
		   return "Signup successful";
	  }
   }
}
