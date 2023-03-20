package com.example.books.service;

import java.util.List;

import com.example.books.entity.BooksEntity;

public interface BooksServiceint {
	public List<BooksEntity> getDetails();
	public List<BooksEntity> getDetails1(String boookname);
	public List<BooksEntity> getDetails2(String bookname,String author);
	public void savedata(BooksEntity be);
	public void updatedata(BooksEntity be);
   public void deleteDetail(String BookName);
}
