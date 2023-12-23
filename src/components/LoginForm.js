import "./LoginForm.css";
import { useState } from "react";
import { API_URL } from "../data"



const LoginForm = (props) => {



    let startUserName = localStorage.getItem("userName") ?? 'Uživatel';
    if (props.language === "EN")
        startUserName = localStorage.getItem("userName") ?? 'User';

    const placeholderPass = props.language === "EN" ? "Password" : "Heslo";
    const placeholderPass2 = props.language === "EN" ? "Password repeat" : "Heslo podruhé";
    const [userName, setUserName] = useState(startUserName);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [resetKey, setResetKey] = useState(0);


    const loginHandler = async () => {

        if (!password || !email) {
            if (props.language === "EN")
                props.setFlash({ show: true, message: 'Enter your login information', color: '#DC4C64' });
            else
                props.setFlash({ show: true, message: 'Zadejte přihlašovací údaje', color: '#DC4C64' });
        }
        else {

            try {

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

                    let result = await response.json();

                    localStorage.setItem("jwt", result.token);
                    setUserName(result.user)
                    localStorage.setItem("userName", result.user);
                    props.setIsLogged(true);

                }
                else {

                    props.setIsLogged(false);
                    if (props.language === "EN")
                        props.setFlash({ show: true, message: 'Login failed', color: '#DC4C64' });
                    else
                        props.setFlash({ show: true, message: 'Přihlášení se nezdařilo', color: '#DC4C64' });


                }

            }
            catch (e) {
                props.setIsLogged(false);
                if (props.language === "EN")
                    props.setFlash({ show: true, message: `Server connection error (${e.message})`, color: '#DC4C64' });
                else
                    props.setFlash({ show: true, message: `Chyba spojení se serverem (${e.message})`, color: '#DC4C64' });
            }
        }
    }

    const logOutHandler = async () => {

        try {

            props.setIsLogged(false);
            localStorage.setItem("jwt", "");

            const url = API_URL + 'auth';
            await fetch(url, {

                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

            })


            if (props.language === "EN")
                props.setFlash({ show: true, message: 'User logged out', color: '#54B4D3' });
            else
                props.setFlash({ show: true, message: 'Uživatel odhlášen', color: '#54B4D3' });

        }
        catch (e) {
            props.setIsLogged(false);
            if (props.language === "EN")
                props.setFlash({ show: true, message: `Server connection error (${e.message})`, color: '#DC4C64' });
            else
                props.setFlash({ show: true, message: `Chyba spojení se serverem (${e.message})`, color: '#DC4C64' });
        }
    }

    const regHandler = async () => {

        try {

            // HESLO JE KRÁTKÉ
            if (password.length < 6) {


                if (props.language === "EN")
                    props.setFlash({ show: true, message: 'Password must have at least 6 characters', color: '#DC4C64' });
                else
                    props.setFlash({ show: true, message: 'Heslo musí mít alespon 6 znaků', color: '#DC4C64' });

                props.setIsLogged(false);
            }
            //HESLA JSOU STEJNÁ a NENÍ KRÁTké
            else if (password === password2) {
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
                    let result = await response.json();


                    localStorage.setItem("jwt", result.token);
                    props.setIsLogged(true);
                    setUserName(result.user)
                    localStorage.setItem("userName", result.user);

                    if (props.language === "EN")
                        props.setFlash({ show: true, message: 'Registration was successful', color: '#54B4D3' });
                    else
                        props.setFlash({ show: true, message: 'Registrace byla úspěšná', color: '#54B4D3' });


                }
                //HESLA NEJSOU STEJNÁ NEBO UŽ JE EMAIL REGISTROVAN NEBO ŠPATNÝ FORMAT MAILU
                else {

                    if (props.language === "EN")
                        props.setFlash({ show: true, message: 'User is already registered or entered an invalid email', color: '#DC4C64' });
                    else
                        props.setFlash({ show: true, message: 'Uživatel je již registrován nebo zadal nevalidní email', color: '#DC4C64' });

                    props.setIsLogged(false);

                }

            }
            else {


                setPassword("");
                setPassword2("");
                setResetKey(prevKey => prevKey + 1);
                props.setFlash({ show: true, message: 'Zadaná hesla se neshodují', color: '#DC4C64' });

            }

        }

        catch (e) {
            props.setIsLogged(false);
            if (props.language === "EN")
                props.setFlash({ show: true, message: `Server connection error (${e.message})`, color: '#DC4C64' });
            else
                props.setFlash({ show: true, message: `Chyba spojení se serverem (${e.message})`, color: '#DC4C64' });
        }
    }





    if (!props.isLogged)
        return (
            <div className="mt-2">
                <div className="dropdown d-flex justify-content-end" key={resetKey}>
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {
                            (props.language === "EN") ?
                                <span>Login</span>
                                :
                                <span>Přihlášení</span>
                        }
                    </button>
                    <div className="dropdown-menu options-container p-3 d-startfex justify-content-center " onClick={(e) => e.stopPropagation()}>

                        <ul className={`nav nav-tabs nav-${props.darkMode}`} id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                    type="button" role="tab" aria-controls="home" aria-selected="true">
                                    {
                                        (props.language === "EN") ?
                                            <span className="text-info">Log.</span>
                                            :
                                            <span className="text-info">Přihlášení</span>
                                    }
                                </button>
                            </li>
                            <li className="nav-item mb-2" role="presentation">
                                <button className="nav-link af-text" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
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
                                    <input className="text-dark" type="password" id="cc" placeholder={`${placeholderPass}`} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    />
                                </div>

                                <div className=" d-flex justify-content-center mt-2">
                                    <button className="rounded hover-button" onClick={loginHandler}>
                                        {
                                            (props.language === "EN") ?
                                                <span>Login</span>
                                                :
                                                <span>Přihlásit</span>
                                        }
                                    </button>
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
                                    <input className="text-dark" type="password" id="b" placeholder={`${placeholderPass}`} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    />
                                </div>

                                <div className="d-flex justify-content-start ps-0">
                                    <input className="text-dark" type="password" id="bb" placeholder={`${placeholderPass2}`} onChange={(e) => {
                                        setPassword2(e.target.value)

                                    }}
                                    />
                                </div>
                                <div className=" d-flex justify-content-center mt-2">
                                    <button className="rounded hover-button" onClick={regHandler}>
                                        {
                                            (props.language === "EN") ?
                                                <span>Register</span>
                                                :
                                                <span>Registrovat</span>
                                        }
                                    </button>
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
                    {userName}
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