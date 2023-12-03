
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import DeletedMovies from './components/DeletedMovies'
// import Footer from './components/Footer'

import Movies from './components/Movies';
import Title from './components/Title';
import React, { useState, useEffect } from 'react';
import { apiGet } from './data';


function App() {


  let cardSizeStart = localStorage.getItem("saveCardSize") ?? 'big';
  let darkModeStart = localStorage.getItem("saveDarkMode") ?? 'dark';
  let orderStart = localStorage.getItem("saveOrder") ?? 'random';

  // prompt("startOrder: "+orderStart)

  const [database, setDatabase] = useState([]); //databaze filmu stažená z API
  const [cardSize, setCardSize] = useState(cardSizeStart); //velikost karet filmů
  const [darkMode, setDarkMode] = useState(darkModeStart); // barevny kmod stranky
  const [order, setOrder] = useState(orderStart);
  const [movieAdded, setMovieAdded] = useState(false); //jestli byl přidaný film, aby se mohla  stranka refresh

  if(darkMode==='light')
  {
    document.body.style.backgroundColor = 'white';
  }
  else
  {
    document.body.style.backgroundColor = '#141414';
  }

  //stpusti se poprve a pak když se změní proměná movieAdded
  useEffect(() => {
    async function fetchMovies() {
      const data = await apiGet("https://www.tsapi.cz/testApi/movies/");
      setDatabase(data);
      setMovieAdded(false);
    };
    fetchMovies();

  }, [movieAdded]);




  return (  
    <div className='container'>

      <Title cardSize={cardSize} setCardSize={setCardSize}
       darkMode={darkMode} setDarkMode={setDarkMode} setOrder={setOrder} order={order}/>

      <AddMovieForm database={database} setDatabase={setDatabase} setMovieAdded={setMovieAdded} darkMode={darkMode} />
      <div className='movies-main-container'>

        <Movies cardSize={cardSize} database={database}
          setDatabase={setDatabase} setMovieAdded={setMovieAdded} 
          darkMode={darkMode} order={order}/>

        <div className={`line-${darkMode}`}></div>

        <DeletedMovies cardSize={cardSize} database={database}
          setDatabase={setDatabase} setMovieAdded={setMovieAdded}
          darkMode={darkMode} />

      </div>
      {/* <div className="footer-main w-100 mt-4">
      <Footer darkMode={darkMode} />
      </div> */}
    </div>

  );
}

export default App;
