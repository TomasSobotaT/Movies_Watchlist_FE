
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import DeletedMovies from './components/DeletedMovies'
import Movies from './components/Movies';
import Title from './components/Title';
import React, { useState,useEffect } from 'react';
import {apiGet} from './data';


 function App() {


  const  [database, setDatabase] = useState([]); //databaze filmu stažená z API

  const  [movieAdded, setMovieAdded] = useState(false); //jestli byl přidaný film, aby se mohla refresh stranka

  //stpusti se poprve a pak když se změní proměná movieAdded
  useEffect(()=>{
      async function fetchMovies()
      {
          const data = await apiGet("https://localhost:7181/api/movies/");
          setDatabase(data);
          setMovieAdded(false);
      };
     fetchMovies();

  },[movieAdded]);



  return (
    <div className='container'>
      <Title/>
    <AddMovieForm database={database} setDatabase={setDatabase} setMovieAdded={setMovieAdded}/>
    <div className='movies-main-container'>
        <Movies database={database} setDatabase={setDatabase}setMovieAdded={setMovieAdded} />
        <div className='line'></div>
        <DeletedMovies database={database} setDatabase={setDatabase} setMovieAdded={setMovieAdded}></DeletedMovies>
    </div>
    </div>
  );
}

export default App;
