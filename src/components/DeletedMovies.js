
import DeleteDeletedMovieButton from './DeleteDeletedMovieButton';
import './DeletedMovies.css'
import {sortArrayById,sortArrayByName,shuffleArray} from '../data'
import { demonstrationDataDel } from '../data';
import { useState } from 'react';

const DeletedMovies = (props) => {
    let [presentationDataDel, setPresentationDataDel] = useState(demonstrationDataDel());

    if (props.isLogged) {


        if ((!Array.isArray(props.database[1]) || !props.database[1] || !props.database[1].length)) {
            return null;
        }
        else {
            // řazení filmů
            if (props.order === "random") {
                props.database[1] = shuffleArray(props.database[1]);
            }
            else if (props.order === "name") {
                props.database[1] = sortArrayByName(props.database[1]);
            }
            else {
                props.database[1] = sortArrayById(props.database[1]);

            }
        }
    }
    else
    {

        
        if (props.order === "random") {
            presentationDataDel = shuffleArray(presentationDataDel);
        }
        else if (props.order === "name") {
            presentationDataDel = sortArrayByName(presentationDataDel);
        }
        else {
        presentationDataDel = sortArrayById(presentationDataDel);
        }
    
}

if (props.isLogged)
    return (
        <div className='del-movies-container'>

            {

                props.database[1].map(oneMovie => (

                    <div key={oneMovie.id} className={`del-movie-container del-movie-container-${props.cardSize} del-movie-container-${props.cardSize}-${props.darkMode}`}>
                        <a href={`https://www.google.com/search?q=csfd+${oneMovie.name}`} target='_blank' rel="noreferrer">



                            {(oneMovie.posterUrl === "" || !oneMovie.posterUrl) ?
                                (
                                    <div className='del-movie-image d-flex flex-column justify-content-center align-items-center'>
                                     
                                        <p className='del-movie-added'>{
                                            new Date(oneMovie.dateAdded).getDate() + ". " +
                                            (new Date(oneMovie.dateAdded).getMonth() + 1) + ". " +
                                            new Date(oneMovie.dateAdded).getFullYear()
                                        }
                                        </p>
                                    
                                        <p className='del-movie-watched'>{
                                            new Date(oneMovie.dateWatched).getDate() + ". " +
                                            (new Date(oneMovie.dateWatched).getMonth() + 1) + ". " +
                                            new Date(oneMovie.dateWatched).getFullYear()
                                        }
                                        </p>
                                    </div>

                                )
                                :
                                (
                                    <div className='del-movie-image d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${oneMovie.posterUrl})` }}>
                                        <div className={`del-movie-image-inner del-movie-image-inner-${props.darkMode} d-flex flex-column justify-content-center align-items-center`}>

                                           
                                            <p className='del-movie-added'>{
                                                new Date(oneMovie.dateAdded).getDate() + ". " +
                                                (new Date(oneMovie.dateAdded).getMonth() + 1) + ". " +
                                                new Date(oneMovie.dateAdded).getFullYear()
                                            }
                                            </p>
                                            <p className='del-movie-watched'>{
                                                new Date(oneMovie.dateWatched).getDate() + ". " +
                                                (new Date(oneMovie.dateWatched).getMonth() + 1) + ". " +
                                                new Date(oneMovie.dateWatched).getFullYear()
                                            }
                                            </p>

                                        </div>
                                    </div>
                                )
                            }

                        </a>
                        <div className='del-title-and-button'>
                            <a href={`https://www.google.com/search?q=csfd+${oneMovie.name}`} target='_blank' rel="noreferrer">
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
else
return (
    <div className='del-movies-container'>

        {

            presentationDataDel.map(oneMovie => (

                <div key={oneMovie.id} className={`del-movie-container del-movie-container-${props.cardSize} del-movie-container-${props.cardSize}-${props.darkMode}`}>
                    <a href={`https://www.google.com/search?q=csfd+${oneMovie.name}`} target='_blank' rel="noreferrer">



                        {(oneMovie.posterUrl === "" || !oneMovie.posterUrl) ?
                            (
                                <div className='del-movie-image d-flex flex-column justify-content-center align-items-center'>
                                 
                                    <p className='del-movie-added'>{
                                        new Date(oneMovie.dateAdded).getDate() + ". " +
                                        (new Date(oneMovie.dateAdded).getMonth() + 1) + ". " +
                                        new Date(oneMovie.dateAdded).getFullYear()
                                    }
                                    </p>
                                
                                    <p className='del-movie-watched'>{
                                        new Date(oneMovie.dateWatched).getDate() + ". " +
                                        (new Date(oneMovie.dateWatched).getMonth() + 1) + ". " +
                                        new Date(oneMovie.dateWatched).getFullYear()
                                    }
                                    </p>
                                </div>

                            )
                            :
                            (
                                <div className='del-movie-image d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${oneMovie.posterUrl})` }}>
                                    <div className={`del-movie-image-inner del-movie-image-inner-${props.darkMode} d-flex flex-column justify-content-center align-items-center`}>

                                       
                                        <p className='del-movie-added'>{
                                            new Date(oneMovie.dateAdded).getDate() + ". " +
                                            (new Date(oneMovie.dateAdded).getMonth() + 1) + ". " +
                                            new Date(oneMovie.dateAdded).getFullYear()
                                        }
                                        </p>
                                        <p className='del-movie-watched'>{
                                            new Date(oneMovie.dateWatched).getDate() + ". " +
                                            (new Date(oneMovie.dateWatched).getMonth() + 1) + ". " +
                                            new Date(oneMovie.dateWatched).getFullYear()
                                        }
                                        </p>

                                    </div>
                                </div>
                            )
                        }

                    </a>
                    <div className='del-title-and-button d-flex justify-content-center'>
                        <a href={`https://www.google.com/search?q=csfd+${oneMovie.name}`} target='_blank' rel="noreferrer">
                            <p className='del-movie-title text-center'>{oneMovie.name}</p>
                        </a>
                        

                    </div>



                </div>
            )
            )
        }
    </div>

);



}


export default DeletedMovies;