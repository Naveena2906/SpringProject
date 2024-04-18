import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useStates } from './States'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

 function Studentedit(){
    const[studentid,setStudentid]=useState("");
    const[studentname,setStudentname]=useState("");
    const[dob,setDob]=useState("");
    const[bookid,setBookid]=useState("");
    const[booktitle,setBooktitle]=useState("");
    const[bookauthor,setBookauthor]=useState("");
    const[price,setPrice]=useState("");
    const[dateborrowed,setDateborrowed]=useState("");
    const[dateoverdue,setDateoverdue]=useState("");
    const[datedueback,setDatedueback]=useState("");
    const[datereturned,setDatereturned]=useState("");
    const[latereturnfine,setLatereturnfine]=useState("");
    const {editMovie,getAllMovies} =useStates();
    useEffect(()=>{
        setStudentid(editMovie?.studentid);
        setStudentname(editMovie?.studentname);
        setDob(editMovie?.dob);
        setBookid(editMovie?.bookid);
        setBooktitle(editMovie?.booktitle);
        setBookauthor(editMovie?.bookauthor);
        setPrice(editMovie?.price);
        setDateborrowed(editMovie?.dateborrowed);
        setDateoverdue(editMovie?.dateoverdue);
        setDatedueback(editMovie?.datedueback);
        setDatereturned(editMovie?.datereturned);
        setLatereturnfine(editMovie?.latereturnfine);
    },[editMovie]);
    const Moviedetails=(studentid)=>{
        axios.put(`http://localhost:8080/update/student/${studentid}`,{
          studentid:studentid,
           studentname:studentname,
           dob:dob,
           bookid:bookid,
           booktitle:booktitle,
           bookauthor:bookauthor,
           price:price,
           dateborrowed:dateborrowed,
           dateoverdue:dateoverdue,
           datedueback:datedueback,
           datereturned:datereturned,
           latereturnfine:latereturnfine
        })
        .then((res)=>{
            console.log(res);
            getAllMovies()
        });
        navigate("/student");
    };
    const navigate=useNavigate();
    const gotoDb=()=>{
        navigate("/student");
    }

    return(
        <>
            <div className="Bookname">
                <TextField
                    onChange={(e)=>setStudentid(e.target.value)}
                    value={studentid}
                    id='outlined-basic'
                    label='Studentid'
                    variant='outlined'
                />
            </div>
            <div className="Author">
                <TextField
                    onChange={(e)=>setStudentname(e.target.value)}
                    value={studentname}
                    id='outlined-basic'
                    label='Studentname'
                    variant='outlined'
                />
            </div>
            <div className="Genere">
                <TextField
                    onChange={(e)=>setDob(e.target.value)}
                    value={dob}
                    id='outlined-basic'
                    label='Dob'
                    variant='outlined'
                />
            </div>
            <div className="Publication">
                <TextField
                    onChange={(e)=>setBookid(e.target.value)}
                    value={bookid}
                    id='outlined-basic'
                    label='Book id'
                    variant='outlined'
                />
            </div>
            <div className="Edition">
                <TextField
                    onChange={(e)=>setBooktitle(e.target.value)}
                    value={booktitle}
                    id='outlined-basic'
                    label='Book title'
                    variant='outlined'
                />
            </div>
            <div className="Language">
                <TextField
                    onChange={(e)=>setBookauthor(e.target.value)}
                    value={bookauthor}
                    id='outlined-basic'
                    label='Book author'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                    id='outlined-basic'
                    label='price'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setDateborrowed(e.target.value)}
                    value={dateborrowed}
                    id='outlined-basic'
                    label='Date borrowed'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setDateoverdue(e.target.value)}
                    value={dateoverdue}
                    id='outlined-basic'
                    label='Date over due'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setDatedueback(e.target.value)}
                    value={datedueback}
                    id='outlined-basic'
                    label='Date due back'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setDatereturned(e.target.value)}
                    value={datereturned}
                    id='outlined-basic'
                    label='Date returned'
                    variant='outlined'
                />
            </div>
            <div className="NoofPages">
                <TextField
                    onChange={(e)=>setLatereturnfine(e.target.value)}
                    value={latereturnfine}
                    id='outlined-basic'
                    label='Late return fine'
                    variant='outlined'
                />
            </div>
            <div className='Get'>
                <Button className="getbutton" variant='outlined' color="primary" onClick={gotoDb}>
                    Cancel
                </Button>
             </div>   
            <div className='post'>
                <Button  variant='outlined' color="primary" size='small'  onClick={()=>Moviedetails(editMovie.studentid)}>
                    Update
                </Button>
             </div>   
        </>
    );
};

export default Studentedit;