package com.example.books.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.books.entity.BooksEntity;
import com.example.books.service.BooksService;


@CrossOrigin("*")
@RestController
public class BooksController {
	@Autowired
    private BooksService bs;
    @GetMapping("/get/book")
    public List<BooksEntity> getdetails(){
  	  return bs.getDetails();
    }
    @GetMapping("/get/book1")
    public List<BooksEntity> getdetails1(@RequestParam String bookname){
  	  return bs.getDetails1(bookname);
    }
    @GetMapping("/get/book2")
    public List<BooksEntity> getdetails2(@RequestParam String bookname,@RequestParam String author){
  	  return bs.getDetails2(bookname, author);
    }
    @PostMapping("/save/book")
    public void saveDetails(@RequestBody BooksEntity be)
    {
  	  bs.savedata(be);
    }
    @PutMapping("/update/book/{bookname}")
    public void updateDetails(@RequestBody BooksEntity be,@PathVariable String bookname)
    {
  	  be.setBookname(bookname);
  	  bs.updatedata(be);
    }
	   @DeleteMapping("/delete/book/{bookname}")
	   public void bm(@PathVariable String bookname)
	   {
		    bs.deleteDetail(bookname);
	   }
}
