import './DeleteDeletedMovieButton.css'
import  {API_URL} from '../data'

const DeleteDeletedMovieButton = (props) => {


    async function fetchDeleteMovie(id){
          
      
            const url = API_URL + 'deletedMovies/' + id;

           await fetch((url),{
            method:'DELETE'
            })
            props.setMovieAdded(true);
    }


   const deleteMovieHandler = async () =>
    {
       
      fetchDeleteMovie(props.id);
       
    }

    return (
        <button onClick={deleteMovieHandler} className='delete-button'></button>
    );

};


export default DeleteDeletedMovieButton;