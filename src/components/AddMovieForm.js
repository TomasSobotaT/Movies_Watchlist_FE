import './AddMovieForm.css';
import { Movie, API_URL } from '../data';
import React, { useState } from 'react';

function AddMovieForm(props) {

  const [name, setName] = useState(''); //jmeno filmu
  const [posterUrl, setPosterUrl] = useState(''); //okdaz na plakat (img na kartu)
  const placeholderName = props.language === "EN" ? "" : "";
  const placeholderPoster = props.language === "EN" ? "E.g.: www.img.com/img.jpg" : "Např: www.img.com/img.jpg";

  //při kliku na přidání nového filmu
  const createNewMovie = async () => {

    if (name.length > 0) {
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
    }
    else {
      if (props.language === "EN")
        props.setFlash({ show: true, message: `Enter movie title`, color: '#DC4C64' });
      else
        props.setFlash({ show: true, message: `Zadejte název filmu`, color: '#DC4C64' });
    }
  }

  async function fetchAddMovie(newMovie) {

    try {

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
      }

      );

    }
    catch (e) {
      props.setIsLogged(false);
      if (props.language === "EN")
        props.setFlash({ show: true, message: `Server connection error (${e.message})`, color: '#DC4C64' });
      else
        props.setFlash({ show: true, message: `Chyba spojení se serverem (${e.message})`, color: '#DC4C64' });
    }
  }


  const posterFindLink = 'https://www.movieposters.com/collections/shop?q=' + name;

  return (
    <div className={`add-movie-form add-movie-form-${props.darkMode} form-group d-flex flex-column flex-md-row  align-items-center`}>

      <label htmlFor='add-name-input'>
        {
          (props.language === "EN") ?
            <span>Movie title:</span>
            :
            <span>Název filmu:</span>
        }
        <input
          className='form-control'
          id='add-name-input'
          type='text'
          value={name}
          placeholder={`${placeholderName}`}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor='add-poster-input'>
        {
          (props.language === "EN") ?
            <span>Link to poster:</span>
            :
            <span>Odkaz na plakát:</span>
        }

        <span><a className='text-info' target='_blank' rel="noreferrer" href={posterFindLink}> (movieposters.com)</a>

          {/* //desktop */}
          <span className='dropdown d-none d-md-inline-block'>

            <button className="dropdown-toggle ms-1 login-form-info-button " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            { (props.darkMode === "light") ?
                <i className="bi bi-info-circle"></i>
                :
                <i className="bi bi-info-circle-fill text-light"></i>

              }
            </button>


            <ul className="dropdown-menu movie-form-tip">

              {(props.language === "EN") ?
                <div>

                  <div className=' mf-span'>1. find the movie poster</div>
                  <div className=' mf-span'>2. right-click on it</div>
                  <div className=' mf-span mb-1'>3. copy the image/poster link</div>

                </div>
                :
                <div>

                  <div className=' mf-span'>1. najděte plakát filmu</div>
                  <div className=' mf-span'>2. klikněte druhým tlačítkem myši</div>
                  <div className=' mf-span mb-1'>3. zkopírujte odkaz na obrázek/plakát</div>

                </div>

              }

              <img className='img-fluid' src='images/tip_img1.png' alt='desktop helper' />
            </ul>
          </span>

          {/* //mobile */}
          <span className='dropdown d-md-none d-inline-block'>

            <button className="dropdown-toggle ms-1 login-form-info-button " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              { (props.darkMode === "light") ?
                <i className="bi bi-info-circle"></i>
                :
                <i className="bi bi-info-circle-fill text-light"></i>

              }
            </button>

            <ul className="dropdown-menu movie-form-tip">

            {(props.language === "EN") ?
              <div>
                <div className=' mf-span'>1. find the movie poster</div>
                <div className=' mf-span mb-1'>2. open it in a new tab</div>
                <img className='img-fluid' src='images/tip_img2.png' alt='desktop helper' />
                <div className=' mf-span my-2'>3. copy the image/poster link from the address bar</div>
                <img className='img-fluid' src='images/tip_img3.png' alt='desktop helper' />
              </div>
              :
              <div>
                <div className=' mf-span'>1. najděte plakát filmu</div>
                <div className=' mf-span mb-1'>2. otevřete ho v nové kartě</div>
                <img className='img-fluid' src='images/tip_img2.png' alt='desktop helper' />
                <div className=' mf-span my-2'>3. zkopírujte nahoře odkaz na obrázek/plakát</div>
                <img className='img-fluid' src='images/tip_img3.png' alt='desktop helper' />
              </div>
}
            </ul>
          </span>


        </span>

        <input
          className='form-control'
          id='add-poster-input'
          type='text'
          value={posterUrl}
          placeholder={`${placeholderPoster}`}
          onChange={(e) => setPosterUrl(e.target.value)}
        />
      </label>

      <button className='btn btn-success add-movie-button' onClick={createNewMovie}>
        {
          (props.language === "EN") ?
            <span>Add movie</span>
            :
            <span>Přidat film</span>
        }
      </button>
    </div>
  );
};

export default AddMovieForm;