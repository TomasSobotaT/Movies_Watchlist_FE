
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import DeletedMovies from './components/DeletedMovies'
import Movies from './components/Movies';
import Title from './components/Title';
import React, { useState, useEffect } from 'react';
import { apiGet, API_URL } from './data';
import NoLoggedInfo from './components/NoLoggedInfo';
import Footer from './components/Footer';


function App() {



  let cardSizeStart = localStorage.getItem("saveCardSize") ?? 'big';
  let darkModeStart = localStorage.getItem("saveDarkMode") ?? 'dark';
  let orderStart = localStorage.getItem("saveOrder") ?? 'random';
  let couldBeUserLogged = (localStorage.getItem("jwt") === null || localStorage.getItem("jwt").toString() === "") ? false : true;


  const [database, setDatabase] = useState([]); //databaze filmu stažená z API
  const [cardSize, setCardSize] = useState(cardSizeStart); //velikost karet filmů
  const [darkMode, setDarkMode] = useState(darkModeStart); // barevny kmod stranky
  const [order, setOrder] = useState(orderStart);       // pořadí filmu na strance /id/name/random
  const [movieAdded, setMovieAdded] = useState(false); //jestli byl přidaný film, aby se mohla  stranka refresh
  const [isLogged, setIsLogged] = useState(couldBeUserLogged);    // jestli je uživatel přihlášen

  if (darkMode === 'light') {
    document.body.style.backgroundColor = 'white';
  }
  else {
    document.body.style.backgroundColor = '#141414';
  }

  //stpusti se poprve a pak když se změní proměná movieAdded
  useEffect(() => {
    async function fetchMovies() {

      if (isLogged) {

        const url = API_URL + 'movies/'
        const data = await apiGet(url);

        setDatabase(data);
        setMovieAdded(false);
      }
      else
        setDatabase([])
    }
    fetchMovies();

  }, [movieAdded, isLogged]);




  return (
    <div className='container'>

      <Title cardSize={cardSize} setCardSize={setCardSize}
        darkMode={darkMode} setDarkMode={setDarkMode} setOrder={setOrder}
        order={order} setIsLogged={setIsLogged} isLogged={isLogged}
        setMovieAdded={setMovieAdded} movieAdded={movieAdded} />


      {isLogged ?
        <       AddMovieForm database={database} setDatabase={setDatabase} setMovieAdded={setMovieAdded} movieAdded={movieAdded}
          darkMode={darkMode} setIsLogged={setIsLogged} isLogged={isLogged} />
        :
        <NoLoggedInfo darkMode={darkMode} />
      }

      <div className='movies-main-container'>

        <Movies cardSize={cardSize} database={database}
          setDatabase={setDatabase} setMovieAdded={setMovieAdded} movieAdded={movieAdded}
          darkMode={darkMode} order={order} isLogged={isLogged} />

        <div className={`line-${darkMode}`}></div>

        <DeletedMovies cardSize={cardSize} database={database}
          setDatabase={setDatabase} setMovieAdded={setMovieAdded} movieAdded={movieAdded}
          darkMode={darkMode} order={order} isLogged={isLogged}/>


        <Footer darkMode={darkMode}/>
      </div>
    </div>

  );
}

export default App;
