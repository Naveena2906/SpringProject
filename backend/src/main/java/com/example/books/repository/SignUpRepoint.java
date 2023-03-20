package com.example.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.books.entity.SignUpEntity;

@Repository
public interface SignUpRepoint extends JpaRepository<SignUpEntity, String> {
   public boolean existsByemail(String email);
}
