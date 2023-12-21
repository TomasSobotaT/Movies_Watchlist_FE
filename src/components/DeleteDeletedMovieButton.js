import './DeleteDeletedMovieButton.css'
import  {API_URL} from '../data'

const DeleteDeletedMovieButton = (props) => {


    async function fetchDeleteMovie(id){
          
      const token = localStorage.getItem("jwt");

            const url = API_URL + 'deletedMovies/' + id;

           await fetch((url),{
            method:'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`
          }
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