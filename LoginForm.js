import "./LoginForm.css";
import { useState } from "react";
import { API_URL } from "../data"



const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const loginHandler = async () => {

        const url = API_URL + 'auth';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'Email': email, 'Password': password })
        })

        if (response.ok) {
            let vysledek = await response.json();
            props.setIsLogged(true);

            console.log(vysledek);
            localStorage.setItem("jwt", vysledek.token);
            props.setIsLogged(true);

           
        }
        else {
            console.log("Prihlaseni zamitnuto");
            props.setIsLogged(false);
          
        }
    }


    const logOutHandler = async () => {

        const url = API_URL + 'auth';
        await fetch(url, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ 'Email': email, 'Password': password })
        
        })
    
        props.setIsLogged(false);
        localStorage.setItem("jwt","");
      
    }

    if (!props.isLogged)
        return (
            <div className="dropdown d-flex justify-content-end mb-4 mb-md-1">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Přihlášení
                </button>
                <div className="dropdown-menu options-container p-3 d-startfex justify-content-center">

                    <div className="d-flex justify-content-start ps-0 ">
                        <input
                            className="text-dark"
                            type="text"
                            id="a"
                            placeholder='Email'

                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

                    <div className="d-flex justify-content-start ps-0">
                        <input
                            className="text-dark"
                            type="password"
                            id="b"
                            placeholder='Heslo'

                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>

                    <div className=" d-flex justify-content-center mt-2">
                        <button className="rounded" onClick={loginHandler}>Přihlásit</button>
                    </div>

                </div>
            </div>
        )


    else

        return (
            <div className="dropdown d-flex justify-content-end mb-4 mb-md-1">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Uživatel
                </button>
                <div className="dropdown-menu options-container p-3 d-startfex justify-content-center">

                    <div className=" d-flex justify-content-center mt-2">
                        <button className="rounded" onClick={logOutHandler}>Odhlásit</button>
                    </div>

                </div>
            </div>
        )


}



export default LoginForm;