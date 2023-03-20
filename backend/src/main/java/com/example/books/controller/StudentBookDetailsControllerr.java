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

import com.example.books.entity.StudentBookDetailsEntity;
import com.example.books.service.StudentBookDetailService;

@CrossOrigin("*")
@RestController
public class StudentBookDetailsControllerr {
      @Autowired
      public StudentBookDetailService sbds;
      @GetMapping("/get/student")
	   public List<StudentBookDetailsEntity> print()
	   {
		   return sbds.getStudentDetails();
	   }
      @PostMapping("/save/student")
      public void saveDetails(@RequestBody StudentBookDetailsEntity sbm)
	   {
		   sbds.savedata(sbm);
	   }
	   @PutMapping("/update/student/{studentid}")
	   public void updateDetails(@RequestBody StudentBookDetailsEntity sbdm,@PathVariable int id)
	   {
		 sbdm.setBookid(id);
		 sbds.updatedata(sbdm);
	   }
	   @DeleteMapping("/delete/student")
	   public void prints(@RequestParam int id)
	   {
		   sbds.deletedata(id);
	   }
}
