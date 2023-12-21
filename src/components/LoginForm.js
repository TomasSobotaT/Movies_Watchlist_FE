import "./LoginForm.css";
import { useState } from "react";
import { API_URL } from "../data"



const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passText, setPassText] = useState("Heslo");
    const [pass2Text, setPass2Text] = useState("Heslo podruhé");
    // const [passVal, setPassVal] = useState("");
    const [resetKey, setResetKey] = useState(0);


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
        localStorage.setItem("jwt", "");

    }

    const regHandler = async () => {

        if (password === password2) {
            const url = API_URL + 'user';
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

                console.log("reg:" + vysledek);
                localStorage.setItem("jwt", vysledek.token);
                props.setIsLogged(true);


            }
            else {
                console.log("registrace zamitnuta");
                props.setIsLogged(false);

            }

        }
        else {
            setPass2Text("Hesla se neshodují")
            setPassText("Hesla se neshodují")

            setPassword("");
            setPassword2("");
            setResetKey(prevKey => prevKey + 1);

        }


    }

    if (!props.isLogged)
        return (
            <div className="mt-2">
                <div className="dropdown d-flex justify-content-end" key={resetKey}>
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Přihlášení
                    </button>
                    <div className="dropdown-menu options-container p-3 d-startfex justify-content-center " onClick={(e)=>e.stopPropagation()}>

                        <ul className={`nav nav-tabs nav-${props.darkMode}`} id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                    type="button" role="tab" aria-controls="home" aria-selected="true">Přihlášení</button>
                            </li>
                            <li className="nav-item mb-2" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                    type="button" role="tab" aria-controls="profile" aria-selected="false">Reg.</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="d-flex justify-content-start ps-0 ">
                                    <input className="text-dark" type="text" id="c" placeholder='Email' onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    />
                                </div>

                                <div className="d-flex justify-content-start ps-0">
                                    <input className="text-dark" type="password" id="cc" placeholder='Heslo' onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    />
                                </div>

                                <div className=" d-flex justify-content-center mt-2">
                                    <button className="rounded hover-button" onClick={loginHandler}>Přihlásit</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="d-flex justify-content-start ps-0 ">
                                    <input className="text-dark" type="text" id="a" placeholder='Email' onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    />
                                </div>

                                <div className="d-flex justify-content-start ps-0">
                                    <input className="text-dark" type="password" id="b" placeholder={passText} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    />
                                </div>

                                <div className="d-flex justify-content-start ps-0">
                                    <input className="text-dark" type="password" id="bb" placeholder={pass2Text} onChange={(e) => {
                                        setPassword2(e.target.value)
                                            
                                    }}
                                    />
                                </div>
                                <div className=" d-flex justify-content-center mt-2">
                                    <button className="rounded hover-button" onClick={regHandler}>Registrovat</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        )

    else
        return (
            <div className="dropdown">
                <button className="btn dropdown-toggle loginForm-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Uživatel uživatel
                </button>
                <div className="dropdown-menu options-container d-startfex justify-content-center">

                    <div className=" d-flex justify-content-center my-2">
                        <button className="rounded hover-button" onClick={logOutHandler}>Odhlásit</button>
                    </div>

                </div>
            </div>
        )


}



export default LoginForm;