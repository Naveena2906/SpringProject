package com.example.books.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.books.entity.BooksEntity;

public interface BooksRepoint extends JpaRepository<BooksEntity, String> {
	public List<BooksEntity> findBybookname(String bookname);
	   public List<BooksEntity> findByBooknameAndAuthor(String bookname,String Author);
}
