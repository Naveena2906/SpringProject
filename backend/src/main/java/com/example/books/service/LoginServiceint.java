package com.example.books.service;

import java.util.List;

import com.example.books.entity.LoginEntity;

public interface LoginServiceint {
     public List<LoginEntity> getdata();
     public List<LoginEntity> findByEmailAndPassword(String email,String password);
}
