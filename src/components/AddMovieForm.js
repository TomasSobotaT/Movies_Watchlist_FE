import './AddMovieForm.css';
import { Movie, API_URL } from '../data';
import React, { useState } from 'react';

function AddMovieForm(props) {

  const [name, setName] = useState(''); //jmeno filmu
  const [posterUrl, setPosterUrl] = useState(''); //okdaz na plakat (img na kartu)

  //při kliku na přidání nového filmu
  const createNewMovie = async () => {

    const newMovie = new Movie(0, name, posterUrl);
    await fetchAddMovie(newMovie);

    if (!props.database || !Array.isArray(props.database) || props.database.length === 0) {
      props.setDatabase([newMovie]);
      props.setMovieAdded(true);
    }
    else {
      props.setDatabase([...props.database, newMovie]);
      props.setMovieAdded(true);
    }

    setName('');
    setPosterUrl('');
  };

  async function fetchAddMovie(newMovie) {
    const url = API_URL + 'movies/';
    const token = localStorage.getItem("jwt");

    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
  }

  const posterFindLink = 'https://www.movieposters.com/collections/shop?q=' + name;

  return (
    <div className={`add-movie-form add-movie-form-${props.darkMode} form-group d-flex flex-column flex-md-row  align-items-center`}>

      <label htmlFor='add-name-input'>
        Název filmu:
        <input
          className='form-control'
          id='add-name-input'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor='add-poster-input'>
        Odkaz na plakát: <span><a target='_blank' rel="noreferrer" href={posterFindLink}>(movieposters.com)</a></span>
        <input
          className='form-control'
          id='add-poster-input'
          type='text'
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
        />
      </label>

      <button className='btn btn-success add-movie-button' onClick={createNewMovie}>Přidat film</button>
    </div>
  );
};

export default AddMovieForm;