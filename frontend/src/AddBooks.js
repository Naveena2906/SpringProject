import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useStates } from './States'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { toast, ToastContainer } from 'react-toastify';
import './App.css';

 function AddBooks(){
    const navigate=useNavigate();
    const[bookname,setBookname]=useState("");
    const[author,setAuthor]=useState("");
    const[genere,setGenere]=useState("");
    const[publication,setPublication]=useState("");
    const[edition,setEdition]=useState("");
    const[language,setLanguage]=useState("");
    const[numberofpages,setNumberofpages]=useState("");
    const {editMovie,getAllMovies} =useStates();
    const Moviedetails=()=>{
        axios.post("http://localhost:8080/save/book",{
           bookname:bookname,
           author:author,
           genere:genere,
           publication:publication,
           edition:edition,
           language:language,
           numberofpages:numberofpages
        })
        .then((res)=>{
            console.log(res);
            getAllMovies();
        });
        toast.success(bookname+ " added");
        setTimeout(() => {
          
          navigate("/book");
        }, 2000);
        // navigate("/book");  
        
        //  navigate("/adds");
        
    };
    const gotoDb=()=>{
        navigate("/book");
    }

    return(
        <div className='addbody'>
               <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        <div className='textfields'>
            <div className="Moviename">
                <TextField
                    onChange={(e)=>setBookname(e.target.value)}
                    value={bookname}
                    id='outlined-basic'
                    label='Bookname'
                    variant='outlined'
                />
            </div>
            <div className="Author">
                <TextField
                    onChange={(e)=>setAuthor(e.target.value)}
                    value={author}
                    id='outlined-basic'
                    label='Author'
                    variant='outlined'
                />
            </div>
            <div className="Genere">
                <TextField
                    onChange={(e)=>setGenere(e.target.value)}
                    value={genere}
                    id='outlined-basic'
                    label='Genere'
                    variant='outlined'
                />
            </div>
            <div className="Publication">
                <TextField
                    onChange={(e)=>setPublication(e.target.value)}
                    value={publication}
                    id='outlined-basic'
                    label='Publication'
                    variant='outlined'
                />
            </div>
            <div className="Editon">
                <TextField
                    onChange={(e)=>setEdition(e.target.value)}
                    value={edition}
                    id='outlined-basic'
                    label='Edition'
                    variant='outlined'
                />
            </div>
            <div className="Language">
                <TextField
                    onChange={(e)=>setLanguage(e.target.value)}
                    value={language}
                    id='outlined-basic'
                    label='Language'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setNumberofpages(e.target.value)}
                    value={numberofpages}
                    id='outlined-basic'
                    label='Number of Pages'
                    variant='outlined'
                />
            </div>
            <div className='addbutton'>
                <Button className="getbutton" variant='contained' color="error" onClick={gotoDb}>
                    Cancel
                </Button>
                <Button  variant='contained' color="success"  className='addatadd' onClick={()=>Moviedetails()}>
                    Add
                </Button>
             </div>  
        </div>
        </div>
    );
};

export default AddBooks;