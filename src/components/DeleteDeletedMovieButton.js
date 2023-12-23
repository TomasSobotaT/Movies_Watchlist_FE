import './DeleteDeletedMovieButton.css'
import { API_URL } from '../data'

const DeleteDeletedMovieButton = (props) => {


  async function fetchDeleteMovie(id) {

    try {
      const token = localStorage.getItem("jwt");

      const url = API_URL + 'deletedMovies/' + id;

      await fetch((url), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      props.setMovieAdded(true);
    }
    catch (e) {
      if (props.language === "EN")
        props.setFlash({ show: true, message: `Server connection error (${e.message})`, color: '#DC4C64' });
      else
        props.setFlash({ show: true, message: `Chyba spojení se serverem (${e.message})`, color: '#DC4C64' });
    }
  }

  const deleteMovieHandler = async () => {

    fetchDeleteMovie(props.id);

  }

  return (
    <button onClick={deleteMovieHandler} className='delete-button'></button>
  );

};


export default DeleteDeletedMovieButton;