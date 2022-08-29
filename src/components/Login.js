import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './Firebase';
import SearchResults from "./SearchResults";
import GetPrivateList from "./GetPrivateList";
import GetList from "./GetList";

function Login () {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, loginRegisterEmail] = useState("");
    const [loginPassword, loginRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    const [ modal, setModal ] = useState(false);

    useEffect (() => { onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
}, [user]);

// console.log(user.uid);

    const register = async () => {
        try {
            const newUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
        }
    }

    const login = async () => {
        try {
            const newUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error) {
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    const toggleModal = () => {
        setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <div className="authorization wrapper">
                <div className="login">
                    <h3>Login</h3>
                    <input placeholder="email" onChange={(e) => {
                        loginRegisterEmail(e.target.value);
                    } }></input>
                    <input placeholder="password" onChange={(e) => {
                        loginRegisterPassword(e.target.value);
                    } }></input>

                    <button 
                    onClick={login}
                    disabled={!(loginEmail  && loginPassword)}
                    >Log In
                    </button>

                    <div>
                        <h3>User logged in</h3>
                        {user?.email}
                        <button onClick={logout}>logout</button>
                    </div>

                    <p>
                        Don't have an account? 
                        <button 
                        onClick={toggleModal}
                        className="signUpBtn"> 
                        Sign Up
                            {/* <a href=""> Sign Up</a> */}
                        </button>
                    </p>
                </div>

                {
                    modal && (
                        <div className="signUpModal">
                            <div 
                            className="overlay"
                            // onClick={toggleModal}
                            >
                            {/* </div> */}
                                <div className="register">
                                    <h3>Register</h3>
                                    <input placeholder="email" onChange={(e) => {
                                        setRegisterEmail(e.target.value);
                                    } }>
                                    </input>
                                    <input placeholder="password" onChange={(e) => {
                                        setRegisterPassword(e.target.value);
                                    } }>
                                    </input>
                                    <button 
                                    onClick={register}
                                    disabled={!(registerEmail  && registerPassword)}
                                    // onClick={toggleModal}
                                    className="signUpBtn"> 
                                    Sign Up
                                    </button>
                                    <button
                                    className="closeSignUp"
                                    onClick={toggleModal}>
                                        X
                                    </button>

                                    {/* <button 
                                    onClick={register}
                                    >
                                        Create User
                                    </button> */}
                                </div>

                            </div>
                        </div>
                    )
                }
            
            </div>
            <SearchResults user={user} />
            <GetList />
            <GetPrivateList user={user} />
        </>
    )
}

export default Login;