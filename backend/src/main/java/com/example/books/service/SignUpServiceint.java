package com.example.books.service;

import java.util.List;

import com.example.books.entity.SignUpEntity;

public interface SignUpServiceint {
     public List<SignUpEntity> getdetails();
     public void savedetails(SignUpEntity su);
     public String updatedetails(SignUpEntity su);
     public String deletedetails(String username);
     public boolean checkusername(String name);
     public boolean checkemail(String email);
}
