import './DeleteMovieButton.css'
import  {API_URL} from '../data'


const DeleteMovieButton = (props) => {


    async function fetchDeleteMovie(id){

            const url = API_URL + 'movies/' + id;

           await fetch((url),{
            method:'DELETE'
            })
            props.setMovieAdded(true);
    }


   const deleteMovieHandler = async () =>
    {
        // const dbDel = props.database[1];
        // const db = props.database[0].filter(a=>a.id !== props.id)
        // const tempDb =  [db,[dbDel]];
        // console.log(db)
        // console.log(tempDb)

       
        // props.setDatabase(tempDb);
      fetchDeleteMovie(props.id);
       
    }

    return (
        <button onClick={deleteMovieHandler} className='delete-button'></button>
    );

};


export default DeleteMovieButton;