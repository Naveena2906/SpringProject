import React, { useState, useEffect } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Button from "@mui/material/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useStates } from "./States";
import "./Books.css"

export const Books = () => {

  const {editMovie,setEditMovie,movies, setMovies,getAllMovies} =useStates();
  const navigate=useNavigate();
  
  useEffect(() => {
    getAllMovies();
  }, []);

const deleteMovie = (bookname) =>{
  console.log(bookname);
  axios.delete(`http://localhost:8080/delete/book/${bookname}`).then((res)=>{
    getAllMovies();
    toast.success(bookname+" successfully deleted");
  });
};

const updateMovie = () =>{
  navigate("/edit");
}

const AddMovie =() =>{
  navigate("/add")
}

  return(
    <div className="tablebody">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <h3 style={{textAlign:'center'}} >Book Details</h3>
            <div style={{textAlign:'right',marginRight:'15%'}} className='addicon' onClick={()=>{AddMovie()}}>
              {/* <h4>Add Books</h4>
              <AddCircleOutlinedIcon /> */}
              <Button  variant='contained' color="success">
                    Add Books
                </Button>
            </div>
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
            <th>Edit</th>
            <th>Remove</th>
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
            <td>
            <div className='editicon' onClick={()=>{updateMovie();setEditMovie(movie)}}>
              <ModeEditOutlineOutlinedIcon />
            </div>
            </td>
            <td>
            <div className='removeicon' onClick={()=> deleteMovie(movie.bookname)}>
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