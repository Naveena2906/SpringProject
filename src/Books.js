import React, { useState, useEffect } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {AppBar,Toolbar,Stack,Icon,Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useStates } from "./States";
import "./Books.css"

export const Books = () => {

  const {editMovie,setEditMovie,movies, setMovies,getAllMovies} =useStates();
  

  // const [searchvalue,setSearchvalue]=useState("");
  // useEffect(()=>{
  //   getAllMovies();
  // },[searchvalue]);
  

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

const Logout = () => {
  navigate("/l");
};


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

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
      <div className="navigationbar">
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              {/* <Icon size="large" edge="start" color="inherit" aria-label="logo" style={{color:'aqua'}}>
                <CameraRollIcon />
              </Icon> */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{color:'aqua'}}>
                Bibliophile
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit" onClick={AddMovie} style={{color:'aqua'}}>Add Books</Button>
                {/* <Button color="inherit" onClick={Addreview} style={{color:'aqua'}}>
                  Review
                </Button> */}
                <Button color="inherit" onClick={Logout} style={{color:'aqua'}}>
                  Logout
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
          </ThemeProvider>
        </div>

                {/* <input className="nav-search" type="text" placeholder="search books">
                  onChange={(e)=>setSearchvalue(e.target.value)}
                </input> */}

      <div>
        <h3 style={{textAlign:'center'}} >Book Details</h3>
            <div style={{textAlign:'right',marginRight:'15%'}} className='addicon' onClick={()=>{AddMovie()}}>
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