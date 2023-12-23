import React, { useEffect } from 'react';
import './Title.css';
import LoginForm from './LoginForm';
import OptionsForm from './OptionsForm';

const Title = (props) => {

  const { flash, setFlash } = props;


  useEffect(() => {
    if (flash.show) {
      const timer = setTimeout(() => {
       setFlash({ show: false, message: '', color: '' });
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, [flash]);




  return (
    <div className={`mt-2 title-container title-container-${props.darkMode}`}>
     
      {props.flash.show && (
        <div id="flash-message" style={{ backgroundColor: props.flash.color }}>
          {props.flash.message}
        </div>
      )}

      <div className='d-flex justify-content-end align-items-end flex-row mb-4'>

        <OptionsForm isLogged={props.isLogged} setIsLogged={props.setIsLogged} cardSize={props.cardSize}
          setCardSize={props.setCardSize} darkMode={props.darkMode} setDarkMode={props.setDarkMode}
          setOrder={props.setOrder} order={props.order} setLanguage={props.setLanguage} language={props.language} />

        <LoginForm setIsLogged={props.setIsLogged} isLogged={props.isLogged}
          setMovieAdded={props.setMovieAdded} movieAdded={props.movieAdded} darkMode={props.darkMode}
          setLanguage={props.setLanguage} language={props.language}
          setFlash={props.setFlash} flash={props.flash} />

      </div>

      <h1>Movies Watchlist</h1>
    </div>
  )

};

export default Title;