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
              <h4>Add Studentdetail</h4>
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
        { movies.map((movie) => {
          return (
            <tr>
            <td> {movie.studentid} </td>
            <td> {movie.studentname} </td>
            <td> {movie.dob} </td>
            <td> {movie.bookid} </td>
            <td> {movie.booktitle} </td>
            <td> {movie.bookauthor} </td>
            <td> {movie.price} </td>
            <td> {movie.dateborrowed} </td>
            <td> {movie.dateoverdue} </td>
            <td> {movie.datedueback} </td>
            <td> {movie.datereturned} </td>
            <td> {movie.latereturnfine} </td>
            <td>
            <div className='editicon' onClick={()=>{updateMovies();setEditMovie(movie)}}>
              <ModeEditOutlineOutlinedIcon />
            </div>
            </td>
            <td>
            <div className='removeicon' onClick={()=> deleteMovies(movie.studentid)}>
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