import React, { useState, useEffect } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";

export const Userbook = () => {

  const {editMovie,setEditMovie,movies, setMovies,getAllMovies} =useStates();
  const navigate=useNavigate();
  
  useEffect(() => {
    getAllMovies();
  }, []);

  const getbook=()=>{
    navigate("/getbook");
  }

// const deleteMovie = (bookname) =>{
//   console.log(bookname);
//   axios.delete(`http://localhost:8080/delete/book/${bookname}`).then((res)=>{
//     getAllMovies();
//   });
// };

// const updateMovie = () =>{
//   navigate("/edit");
// }

// const AddMovie =() =>{
//   navigate("/add")
// }

  return(
    <div className="tablebody">
      <div>
        <h3 style={{textAlign:'center'}} >Book Details</h3>
            {/* <div style={{textAlign:'right',marginRight:'15%'}} className='addicon' onClick={()=>{AddMovie()}}>
              <h4>Add Books</h4>
              <AddCircleOutlinedIcon />
            </div> */}
        <div className='table'>
          <table>
          <tr>
            <th>Bookname</th>
            <th>Author</th>
            <th>Genere</th>
            <th>Publication</th>
            <th>Language</th>
            <th>Edition</th>
            <th>Number of Pages</th>
            
          </tr>
          <br/>
        { movies.map((movie) => {
          return (
            <tr>
            <td> {movie.bookname} </td>
            <td> {movie.author} </td>
            <td> {movie.genere} </td>
            <td> {movie.publication} </td>
            <td> {movie.language} </td>
            <td> {movie.edition} </td>
            <td> {movie.numberofpages} </td>
            
            {/* <td>
            <div className='editicon' onClick={()=>{updateMovie();setEditMovie(movie)}}>
              <ModeEditOutlineOutlinedIcon />
            </div>
            </td>
            <td>
            <div className='removeicon' onClick={()=> deleteMovie(movie.bookname)}>
              <RemoveCircleOutlineIcon />
            </div>
            </td> */}
            </tr>
          )    
      })}
      </table>
      </div>
      </div>
      </div>
  )
};