import React from 'react'
import { useState,createContext,useContext } from 'react';
const Context=createContext();

export const States = ({children}) => {
    const[editMovie,setEditMovie]=useState({});
  const [movies, setMovies] = useState([]);
  //  const[editMovies,setEditMovies]=useState({});
  //  const [moviess, setMovie] = useState([]);

    const getAllMovies = () => {
      fetch("http://localhost:8080/get/book")
        .then((res) => res.json())
        .then((result) => {
          setMovies(result);
          console.log(result);
        });
    };
    
    //   const getAllMovie = () => {
    //     fetch("http://localhost:8080/get/student")
    //       .then((res) => res.json())
    //       .then((result) => {
    //         setMovies(result);
    //         console.log(result);
          
    //       });
    //  };
    
  return (
    <Context.Provider value={{editMovie,setEditMovie,getAllMovies,movies, setMovies
      }}>
        {children}
    </Context.Provider>
    
  );
  //  return (
  //    <Context.Provider value={{editMovie,setEditMovie,getAllMovies,movies, setMovies
  //      }}>
  //        {children}
  //    </Context.Provider>
  //  );
};

export const useStates = () =>useContext(Context);
