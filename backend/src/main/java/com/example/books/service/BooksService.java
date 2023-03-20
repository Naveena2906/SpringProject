package com.example.books.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.entity.BooksEntity;
import com.example.books.repository.BooksRepoint;

@Service
public class BooksService implements BooksServiceint {

	
	@Autowired
	public BooksRepoint br;
	@Override
	public List<BooksEntity> getDetails() {
		
		return br.findAll();
	}

	@Override
	public List<BooksEntity> getDetails1(String boookname) {
		return br.findBybookname(boookname);
	}

	@Override
	public List<BooksEntity> getDetails2(String bookname, String author) {
		return br.findByBooknameAndAuthor(bookname, author);
	}

	@Override
	public void savedata(BooksEntity be) {
		br.save(be);
		
	}

	@Override
	public void updatedata(BooksEntity be) {
		br.save(be);
	}

	@Override
	public void deleteDetail(String BookName) {
       br.deleteById(BookName);
		
	}
  
}
