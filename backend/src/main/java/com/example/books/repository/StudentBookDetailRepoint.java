package com.example.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.books.entity.StudentBookDetailsEntity;

@Repository
public interface StudentBookDetailRepoint extends JpaRepository<StudentBookDetailsEntity, Integer> {

}
