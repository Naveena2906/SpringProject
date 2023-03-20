package com.example.books.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.books.entity.LoginEntity;

@Repository
public interface LoginRepoint extends JpaRepository<LoginEntity, String> {
    public List<LoginEntity> findByEmailAndPassword(String email,String password);
}
