import './NoLoggedInfo.css'



const NoLoggedInfo = (props) =>
{


return(
    <div className={`no-logged-info h4 text-center my-4 my-md-5 nl-text-${props.darkMode}`}>

        {
            (props.language === "EN") ?

            <span>To create your own list login/register.</span>
            :
            <span>Pro vytvoření svého seznamu se přihlašte/registrujte.</span>

        }

    </div>
    

);
}


export default NoLoggedInfo