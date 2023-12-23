
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import DeletedMovies from './components/DeletedMovies'
import Movies from './components/Movies';
import Title from './components/Title';
import React, { useState, useEffect } from 'react';
import { apiGet, API_URL } from './data';
import NoLoggedInfo from './components/NoLoggedInfo';
import Footer from './components/Footer';
import NoMoviesForm from './components/NoMoviesForm';


function App() {



  let cardSizeStart = localStorage.getItem("saveCardSize") ?? 'big';
  let darkModeStart = localStorage.getItem("saveDarkMode") ?? 'dark';
  let orderStart = localStorage.getItem("saveOrder") ?? 'random';
  let couldBeUserLogged = (localStorage.getItem("jwt") === null || localStorage.getItem("jwt").toString() === "") ? false : true;
  let languageStart = localStorage.getItem("language") ?? 'EN';


  const [database, setDatabase] = useState([]); //databaze filmu stažená z API
  const [cardSize, setCardSize] = useState(cardSizeStart); //velikost karet filmů
  const [darkMode, setDarkMode] = useState(darkModeStart); // barevny kmod stranky
  const [order, setOrder] = useState(orderStart);       // pořadí filmu na strance /id/name/random
  const [movieAdded, setMovieAdded] = useState(false); //jestli byl přidaný film, aby se mohla  stranka refresh
  const [isLogged, setIsLogged] = useState(couldBeUserLogged);    // jestli je uživatel přihlášen
  const [language, setLanguage] = useState(languageStart); // jazyk programu
  const [flash, setFlash] = useState({ show: false, message: '', color: '' }); // nastavení response zprav

  if (darkMode === 'light') {
    document.body.style.backgroundColor = 'white';
  }
  else {
    document.body.style.backgroundColor = '#141414';
  }

  //stpusti se poprve a pak když se změní proměná movieAdded
  useEffect(() => {
    async function fetchMovies() {

      try {
        if (isLogged) {

          const url = API_URL + 'movies/'
          const data = await apiGet(url);

          setDatabase(data);
          setMovieAdded(false);
        }
        else
          setDatabase([]);
        } catch (e) {
         
          if (language === "EN")
          setFlash({ show: true, message: `Server connection error (${e.message})`, color: '#DC4C64' });
      else
          setFlash({ show: true, message: `Chyba spojení se serverem (${e.message})`, color: '#DC4C64' });
        }
     
    }
    
    fetchMovies();
    
    
  }, [movieAdded, isLogged]);




  return (
    <div className='container'>

      <Title cardSize={cardSize} setCardSize={setCardSize}
        darkMode={darkMode} setDarkMode={setDarkMode} setOrder={setOrder}
        order={order} setIsLogged={setIsLogged} isLogged={isLogged}
        setMovieAdded={setMovieAdded} movieAdded={movieAdded}
        setLanguage={setLanguage} language={language} setFlash={setFlash} flash={flash}/>


      {isLogged ?
        <AddMovieForm database={database} setDatabase={setDatabase} setMovieAdded={setMovieAdded}
          movieAdded={movieAdded} darkMode={darkMode} setIsLogged={setIsLogged} isLogged={isLogged}
          setLanguage={setLanguage} language={language} setFlash={setFlash} flash={flash}/>
        :
        <NoLoggedInfo darkMode={darkMode} setLanguage={setLanguage} language={language} />
      }

      <div className='movies-main-container'>


        {!((database[0] == null && database[1] == null) || (database[0].length < 1 && database[1].length < 1)) || !isLogged ?

          <div className='w-100'>
            <Movies cardSize={cardSize} database={database}
              setDatabase={setDatabase} setMovieAdded={setMovieAdded} movieAdded={movieAdded}
              darkMode={darkMode} order={order} isLogged={isLogged}
              setLanguage={setLanguage} language={language} 
              setFlash={setFlash} flash={flash}/>

            <div className={`line-${darkMode} w-100`}></div>

            <DeletedMovies cardSize={cardSize} database={database}
              setDatabase={setDatabase} setMovieAdded={setMovieAdded} movieAdded={movieAdded}
              darkMode={darkMode} order={order} isLogged={isLogged}
              setLanguage={setLanguage} language={language}
              setFlash={setFlash} flash={flash} />
          </div>
          :
          <NoMoviesForm setLanguage={setLanguage} language={language} />

        }

        <Footer darkMode={darkMode} setLanguage={setLanguage} language={language} />
      </div>

    </div>


  );

}

export default App;
