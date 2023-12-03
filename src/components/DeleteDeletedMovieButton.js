import './DeleteDeletedMovieButton.css'



const DeleteDeletedMovieButton = (props) => {


    async function fetchDeleteMovie(id){
            const url = 'https://www.tsapi.cz/testApi/deletedMovies/' + id;
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