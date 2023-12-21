import './NoLoggedInfo.css'



const NoLoggedInfo = (props) =>
{


return(
    <div className={`no-logged-info h4 text-center my-5 text-${props.darkMode}`}>
        Pro vytvoření svého seznamu se přihlašte/registrujte.
    </div>

);
}


export default NoLoggedInfo