import React, { useState, useEffect } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStates } from "./States";

export const Student = () => {

  const {editMovie,setEditMovie,movies, setMovies,getAllMovies} =useStates();
  const navigate=useNavigate();
  
  useEffect(() => {
    getAllMovies();
  }, []);

const deleteMovies = (studentid) =>{
  console.log(studentid);
  axios.delete(`http://localhost:8080/delete/student/${studentid}`).then((res)=>{
    getAllMovies();
  });
};

const updateMovies = () =>{
  navigate("/edits");
}

const AddMovies =() =>{
  navigate("/adds")
}

  return(
    <div className="tablebody">
      <div>
        <h3 style={{textAlign:'center'}} >Student Details</h3>
            <div style={{textAlign:'right',marginRight:'15%'}} className='addicon' onClick={()=>{AddMovies()}}>
              <h4>Add Books</h4>
              <AddCircleOutlinedIcon />
            </div>
        <div className='table'>
          <table>
          <tr>
            <th>Studentid</th>
            <th>Studentname</th>
            <th>Dob</th>
            <th>Bookid</th>
            <th>Booktitle</th>
            <th>Bookauthor</th>
            <th>Price</th>
            <th>Dateborrowed</th>
            <th>Dateoverdue</th>
            <th>Datedueback</th>
            <th>Datereturned</th>
            <th>Latereturnfine</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
          <br/>
        { movies.map((book) => {
          return (
            <tr>
            <td> {book.studentid} </td>
            <td> {book.studentname} </td>
            <td> {book.dob} </td>
            <td> {book.bookid} </td>
            <td> {book.booktitle} </td>
            <td> {book.bookauthor} </td>
            <td> {book.price} </td>
            <td> {book.dateborrowed} </td>
            <td> {book.dateoverdue} </td>
            <td> {book.datedueback} </td>
            <td> {book.datereturned} </td>
            <td> {book.latereturnfine} </td>
            <td>
            <div className='editicon' onClick={()=>{updateMovies();setEditMovie(book)}}>
              <ModeEditOutlineOutlinedIcon />
            </div>
            </td>
            <td>
            <div className='removeicon' onClick={()=> deleteMovies(book.studentid)}>
              <RemoveCircleOutlineIcon />
            </div>
            </td>
            </tr>
          )    
      })}
      </table>
      </div>
      </div>
      </div>
  )
};