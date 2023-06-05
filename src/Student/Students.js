

import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const Students = () => {
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
  const AddReview=()=>{
      const[bookid,setBookid]=useState("");
      if(studentid===''||studentname===''||booktitle===''||dateborrowed==='')
      {
          toast.error("Enter all fields");
        }
        else
        {
            axios.post("http://localhost:8080/save/student",{
                  //  id:id,
                   studentid:studentid,
                   studentname:studentname,
                   booktitle:booktitle,
                   dateborrowed:dateborrowed
                })
                .then((res)=>{
                    console.log(res);
                });
            navigate("/db");
        }
    };
    const navigate=useNavigate();

    const gotoDb =() =>{
      navigate("/db");
    }
  return (
    
    <div>
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
                    onChange={(e)=>setFavmovie(e.target.value)}
                    value={favmovie}
                    id='outlined-basic'
                    label='Favmovie'
                    variant='outlined'
                />
            </div>
            <div className="Actor">
                <TextField
                    onChange={(e)=>setRating(e.target.value)}
                    value={rating}
                    id='outlined-basic'
                    label='Rating'
                    variant='outlined'
                    onKeyPress={(event)=>{
                        if(!/[0-9]/.test(event.key)){
                            event.preventDefault();
                        }
                    }}
                />
            </div>
            <div className="Actress">
                <TextField
                    onChange={(e)=>setYourcomments(e.target.value)}
                    value={yourcomments}
                    id='outlined-basic'
                    label='Comments'
                    variant='outlined'
                />
            </div>
            <div className='addbutton'>
                <Button className="getbutton" variant='contained' color="error" onClick={gotoDb}>
                    Cancel
                </Button>
                <Button  variant='contained' color="success"   onClick={AddReview}>
                    post
                </Button>
             </div>   
            </div>
    </div>
  );
};