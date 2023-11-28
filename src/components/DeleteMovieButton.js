import './DeleteMovieButton.css'



const DeleteMovieButton = (props) => {


    async function fetchDeleteMovie(id){
            const url = 'https://localhost:7181/api/movies/' + id;
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