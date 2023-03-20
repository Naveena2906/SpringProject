package com.example.books.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="studentdetail")
public class StudentBookDetailsEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	 private int studentid;
	   private String studentname;
	   private String dob;
	   private int bookid;
	   private String booktitle;
	   private String bookauthor;
	   private int price;
	   private String dateborrowed;
	   private int dateoverdue;
	   private String datedueback;
	   private String datereturned;
	   private String latereturnfine;
	public int getStudentid() {
		return studentid;
	}
	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public String getBooktitle() {
		return booktitle;
	}
	public void setBooktitle(String booktitle) {
		this.booktitle = booktitle;
	}
	public String getBookauthor() {
		return bookauthor;
	}
	public void setBookauthor(String bookauthor) {
		this.bookauthor = bookauthor;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDateborrowed() {
		return dateborrowed;
	}
	public void setDateborrowed(String dateborrowed) {
		this.dateborrowed = dateborrowed;
	}
	public int getDateoverdue() {
		return dateoverdue;
	}
	public void setDateoverdue(int dateoverdue) {
		this.dateoverdue = dateoverdue;
	}
	public String getDatedueback() {
		return datedueback;
	}
	public void setDatedueback(String datedueback) {
		this.datedueback = datedueback;
	}
	public String getDatereturned() {
		return datereturned;
	}
	public void setDatereturned(String datereturned) {
		this.datereturned = datereturned;
	}
	public String getLatereturnfine() {
		return latereturnfine;
	}
	public void setLatereturnfine(String latereturnfine) {
		this.latereturnfine = latereturnfine;
	}
	public StudentBookDetailsEntity(int studentid, String studentname, String dob, int bookid, String booktitle,
			String bookauthor, int price, String dateborrowed, int dateoverdue, String datedueback, String datereturned,
			String latereturnfine) {
		super();
		this.studentid = studentid;
		this.studentname = studentname;
		this.dob = dob;
		this.bookid = bookid;
		this.booktitle = booktitle;
		this.bookauthor = bookauthor;
		this.price = price;
		this.dateborrowed = dateborrowed;
		this.dateoverdue = dateoverdue;
		this.datedueback = datedueback;
		this.datereturned = datereturned;
		this.latereturnfine = latereturnfine;
	}
	public StudentBookDetailsEntity() {
		super();
	}
	@Override
	public String toString() {
		return "StudentBookDetailsEntity [studentid=" + studentid + ", studentname=" + studentname + ", dob=" + dob
				+ ", bookid=" + bookid + ", booktitle=" + booktitle + ", bookauthor=" + bookauthor + ", price=" + price
				+ ", dateborrowed=" + dateborrowed + ", dateoverdue=" + dateoverdue + ", datedueback=" + datedueback
				+ ", datereturned=" + datereturned + ", latereturnfine=" + latereturnfine + "]";
	}
	
}
