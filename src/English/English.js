import React, { useState, useEffect } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";
import {AppBar,Toolbar,Stack,IconButton,Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../App.css';
import Navbar from "../Navbar";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import {Grid} from "@mui/material";
export const English = () => {

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

const Logout = () => {
  navigate("/l");
};


const tamil = () => {
  navigate("/tamilbooks");
};
const english = () => {
  navigate("/englishbooks");
};
const hindi = () => {
  navigate("/hindibooks");
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
      {/* <div></div> */}
       {/* <div className="navigationbar">
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar> */}
              {/* <Icon size="large" edge="start" color="inherit" aria-label="logo" style={{color:'aqua'}}>
                <CameraRollIcon />
              </Icon> */}
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{color:'aqua'}} fontSize={'2.7em'}>
                Bibliophile
              </Typography>
              <Stack direction="row" spacing={2}> */}
                {/* <Button color="inherit" onClick={AddMovie} style={{color:'aqua'}}>Add Books</Button> */}
                {/* <Button color="inherit" onClick={Addreview} style={{color:'aqua'}}>
                  Review
                </Button> */}
                {/* <Button color="inherit" onClick={Logout} style={{color:'aqua'}} >
                  Logout
                </Button> */}
              {/* </Stack>
            </Toolbar>
          </AppBar>
          </ThemeProvider>
        </div> */}
      <div>
      <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="large">
        <Link to='/user'> <ArrowBackIcon /></Link>
      </IconButton>
    </Stack>
        <h3 style={{textAlign:'center'}} >Book Details</h3>



        {/* <Grid container spacing={2}>
        <Grid item><Button   color="success"  className="language1" onClick={tamil}>Tamil</Button></Grid>
        <Grid item><Button   color="success"  className="language2" onClick={english}>english</Button></Grid>
        <Grid item><Button   color="success"  className="language3" onClick={hindi}>hindi</Button></Grid>
        </Grid> */}



        <Navbar/>
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
            if(movie.language==='English')
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