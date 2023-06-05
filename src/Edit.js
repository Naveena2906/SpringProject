import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useStates } from './States'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

 function Edit(){
    const[bookname,setBookname]=useState("");
    const[author,setAuthor]=useState("");
    const[genere,setGenere]=useState("");
    const[publication,setPublication]=useState("");
    const[edition,setEdition]=useState("");
    const[language,setLanguage]=useState("");
    const[numberofpages,setNumberofpages]=useState("");
    const {editMovie,getAllMovies} =useStates();
    useEffect(()=>{
        setBookname(editMovie?.bookname);
        setAuthor(editMovie?.author);
        setGenere(editMovie?.genere);
        setPublication(editMovie?.publication);
        setEdition(editMovie?.edition);
        setLanguage(editMovie?.language);
        setNumberofpages(editMovie?.numberofpages);
    },[editMovie]);
    const Moviedetails=(bookname)=>{
        axios.put(`http://localhost:8080/update/book/${bookname}`,{
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
            getAllMovies()
        });
        navigate("/book");
    };
    const navigate=useNavigate();
    const gotoDb=()=>{
        navigate("/book");
    }

    return(
        <div className='editbody'>
        <div className='textfields'>
            <div className="Bookname">
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
            <div className="Edition">
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
                    label='Number of pages'
                    variant='outlined'
                />
            </div>
            <div className='editbutton'>
                <Button className="getbutton" variant='contained' color="error" onClick={gotoDb}>
                    Cancel
                </Button>  
                <Button  variant='contained' color="success" className='updateatedit' onClick={()=>Moviedetails(editMovie.bookname)}>
                    Update
                </Button>
            </div>   
        </div>
        </div>
    );
};

export default Edit;