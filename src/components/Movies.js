
import DeleteMovieButton from './DeleteMovieButton';
import './Movies.css'
import { shuffleArray, sortArrayById, sortArrayByName } from '../data';
// import React, { useState } from 'react';




const Movies = (props) => {

    if (!Array.isArray(props.database[0]) || !props.database[0] || !props.database[0].length) {
        return null
    }


    // řazení filmů
    if (props.order === "random") {
        props.database[0] = shuffleArray(props.database[0]);
    }
    else if (props.order === "name") {
        props.database[0] = sortArrayByName(props.database[0]);
    }
    else {
        props.database[0] = sortArrayById(props.database[0]);

    }

    return (
        <div className='movies-container'>

            {

                props.database[0].map(oneMovie => (


                    <div key={oneMovie.id} className={`movie-container movie-container-${props.cardSize} movie-container-${props.cardSize}-${props.darkMode}`}>
                        <a href={`https://www.google.com/search?q=csfd+${oneMovie.name}`} target='_blank' rel="noreferrer"
                            className='text-decoration-none text-dark'>

                            {(oneMovie.posterUrl === "" || !oneMovie.posterUrl) ?
                                (
                                    <div className='movie-image d-flex flex-column justify-content-center align-items-center'>
                                        <p>Přidáno:</p>
                                        <p>{
                                            new Date(oneMovie.dateAdded).getDate() + ". " +
                                            (new Date(oneMovie.dateAdded).getMonth() + 1) + ". " +
                                            new Date(oneMovie.dateAdded).getFullYear()
                                        }
                                        </p>
                                    </div>
                                )
                                :
                                (
                                    <div className='movie-image d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${oneMovie.posterUrl})` }}>
                                        <div className={`movie-image-inner movie-image-inner-${props.darkMode} d-flex flex-column justify-content-center align-items-center`}>

                                            <p>Přidáno:</p>
                                            <p>{
                                                new Date(oneMovie.dateAdded).getDate() + ". " +
                                                (new Date(oneMovie.dateAdded).getMonth() + 1) + ". " +
                                                new Date(oneMovie.dateAdded).getFullYear()
                                            }
                                            </p>

                                        </div>
                                    </div>
                                )
                            }

                        </a>
                        <div className='title-and-button'>
                            <a href={`https://www.google.com/search?q=csfd+${oneMovie.name}`} target='_blank' rel="noreferrer">
                                <p className='movie-title text-wrap'>{oneMovie.name}</p>
                            </a>
                            <DeleteMovieButton
                                database={props.database}
                                id={oneMovie.id}
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