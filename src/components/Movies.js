
import DeleteMovieButton from './DeleteMovieButton';
import './Movies.css'
import { shuffleArray, sortArrayById,sortArrayByName } from '../data';
// import React, { useState } from 'react';




const Movies = (props) => {

    if (!Array.isArray(props.database[0]) || !props.database[0] || !props.database[0].length) {
        return null
    }

    
        //náhodné řazení filmů
      if(props.order === "random")
      {
          props.database[0] = shuffleArray(props.database[0]);
      }  
      else if (props.order === "name")
      {
        props.database[0] = sortArrayByName(props.database[0]);
      }
      else
      {
        props.database[0] = sortArrayById(props.database[0]);

      }

    return (
        <div className='movies-container'>

            {

                props.database[0].map(oneMovie => (

                    <div key={oneMovie.id} className={`movie-container movie-container-${props.cardSize} movie-container-${props.cardSize}-${props.darkMode}`}>
                        <a href={`${oneMovie.csfdUrl}`} target='_blank' rel="noreferrer"
                         className='text-decoration-none text-dark'>

                            {(oneMovie.posterUrl === "" || !oneMovie.posterUrl) ?
                            (
                                <div className='movie-image d-flex justify-content-center align-items-center'>
                                <p>{oneMovie.name}</p>
                                </div>   
                            )
                            :
                            (
                                <div className='movie-image' style={{ backgroundImage: `url(${oneMovie.posterUrl})` }}></div>
                )}
                            
                        </a>
                        <div className='title-and-button'>
                            <a href={`url(${oneMovie.csfdUrl})`} target='_blank' rel="noreferrer">
                                <p className='movie-title text-wrap'>{oneMovie.name}</p>
                            </a>
                            <DeleteMovieButton
                                database={props.database}
                                id={oneMovie.id}
                                // setDatabase={props.setDatabase}
                                setMovieAdded={props.setMovieAdded}
                            />
                        </div>



                    </div>
                )
                )
            }
        </div>

    );

}


export default Movies;