// import React, { useState, useEffect } from 'react';
import './Title.css';
import LoginForm from './LoginForm';
import OptionsForm from './OptionsForm';

const Title = (props) => {
 

return (
  <div className={`mt-3 title-container title-container-${props.darkMode}`}>

    <div className='d-flex  justify-content-end align-items-end  flex-column flex-md-row'>
      
      <OptionsForm isLogged={props.isLogged} setIsLogged={props.setIsLogged} cardSize={props.cardSize}
       setCardSize={props.setCardSize} darkMode={props.darkMode} setDarkMode={props.setDarkMode}
       setOrder={props.setOrder}order={props.order}/>
      
      <LoginForm setIsLogged={props.setIsLogged} isLogged={props.isLogged}
       setMovieAdded={props.setMovieAdded}  movieAdded={props.movieAdded} darkMode={props.darkMode}/> 

       </div>
      <h1>Movies Watchlist</h1>
  </div>
)

};  

export default Title;