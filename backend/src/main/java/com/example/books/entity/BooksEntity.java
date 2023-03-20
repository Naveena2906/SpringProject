package com.example.books.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bookdetail")
public class BooksEntity {
	@Id
	 private String bookname;
     private String author;
     private int edition;
     private String publication;
     private String genere;
     private String language;
     private int numberofpages;
	public BooksEntity(String bookname, String author, int edition, String publication, String genere, String language,
			int numberofpages) {
		super();
		this.bookname = bookname;
		this.author = author;
		this.edition = edition;
		this.publication = publication;
		this.genere = genere;
		this.language = language;
		this.numberofpages = numberofpages;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getEdition() {
		return edition;
	}
	public void setEdition(int edition) {
		this.edition = edition;
	}
	public String getPublication() {
		return publication;
	}
	public void setPublication(String publication) {
		this.publication = publication;
	}
	public String getGenere() {
		return genere;
	}
	public void setGenere(String genere) {
		this.genere = genere;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public int getNumberofpages() {
		return numberofpages;
	}
	public void setNumberofpages(int numberofpages) {
		this.numberofpages = numberofpages;
	}
	@Override
	public String toString() {
		return "BooksEntity [bookname=" + bookname + ", author=" + author + ", edition=" + edition + ", publication="
				+ publication + ", genere=" + genere + ", language=" + language + ", numberofpages=" + numberofpages
				+ "]";
	}
	public BooksEntity() {
		super();
	}
}
