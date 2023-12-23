import './NoMoviesForm.css'



const NoMoviesForm = (props) => {




    return (
        <div className='d-flex flex-column justify-content-start justify-content-md-center align-items-center w-100'>

            <div className='nmf-container'>
                <img className='img-fluid russel w-100' src="images/gif.gif" alt="welcome img" />
                <div className='russel-text'>

       
                    <p className='h4 text-center text-light russel-text'>
                        {
                            props.language === "EN" ?
                                <span>... so add movies to the list and have some fun!!!</span>
                                :
                                <span>... tak přidejte filmy na seznam a užijte si spoustu zábavy!</span>
                        }
                    </p>

    
                </div>

            </div>


        </div>

    )



}



export default NoMoviesForm;






