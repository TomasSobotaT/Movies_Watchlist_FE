
import DeleteDeletedMovieButton from './DeleteDeletedMovieButton';
import './DeletedMovies.css'
// import React, { useState } from 'react';

const DeletedMovies = (props) => {

    if (!Array.isArray(props.database[1]) || !props.database[1] || !props.database[1].length) {
        return null
    }

    return (
        <div className='del-movies-container'>

            {

                props.database[1].map(oneMovie => (

                    <div key={oneMovie.id} className={`del-movie-container del-movie-container-${props.cardSize} del-movie-container-${props.cardSize}-${props.darkMode}`}>
                        <a href={`${oneMovie.csfdUrl}`} target='_blank' rel="noreferrer">



                            {(oneMovie.posterUrl === "" || !oneMovie.posterUrl) ?
                            (
                                <div className='del-movie-image d-flex justify-content-center align-items-center'>
                                <p>{oneMovie.name}</p>
                                </div>
                                
                            )
                            :
                            (
                                <div className='del-movie-image' style={{ backgroundImage: `url(${oneMovie.posterUrl})` }}></div>
                )}
                            
                        </a>
                        <div className='del-title-and-button'>
                            <a href={`url(${oneMovie.csfdUrl})`} target='_blank' rel="noreferrer">
                                <p className='del-movie-title'>{oneMovie.name}</p>
                            </a>
                            <DeleteDeletedMovieButton
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


export default DeletedMovies;