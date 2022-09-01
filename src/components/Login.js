import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
import {auth} from './Firebase';
import Nav from "./Nav";
import Header from "./Header";

function Login () {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, loginRegisterEmail] = useState("");
    const [loginPassword, loginRegisterPassword] = useState("");
    const [email, setEmail] = useState("");
    const [ modal, setModal ] = useState(false);
    const [user, setUser] = useState({});

    useEffect (() => { onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser.uid);
        setEmail(currentUser)
    })
    }, [user]);

    console.log(user)

    const register = async () => {
        try {
           const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
        }
    }

    const login = async () => {
        try {
          const user =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error) {
        }
    }

    const logout = async () => {
        await signOut(auth);
        setUser(null)
        setEmail(null)
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
        <Nav user={user}/> 
        <Header />
            <div className="authorization wrapper">
                <div className="login">
                    <h3>Login</h3>
                    <input 
                        placeholder="email" 
                        onChange={(e) => {
                        loginRegisterEmail(e.target.value);
                        }}>
                    </input>

                    <input 
                        placeholder="password" 
                        onChange={(e) => {
                        loginRegisterPassword(e.target.value);
                        }}>
                    </input>
                    
                    {/* <Link  onClick={login} className="loginButton"
                    disabled={!(loginEmail  && loginPassword)} to={{pathname:"/SearchResults", search:`?userid=${user}`}}>Log In</Link> */}

                    <button onClick={login} className="loginButton"
                    disabled={!(loginEmail  && loginPassword)}>Log In</button>

                    <p>
                        Don't have an account? 
                        <button 
                        onClick={toggleModal}
                        className="signUpBtn"> 
                        Sign Up
                        </button>
                    </p>

                    
            <h3 className="userLog">User logged in</h3>
            <p className="userEmail">{email?.email}</p>
            <button onClick={logout} className="logoutBtn">logout</button>
         
                </div>

                {
                    modal && (
                        <div className="signUpModal">
                            <div className="overlay">
                                <div className="register">
                                    <h3>Register</h3>
                                    <input 
                                        placeholder="email" 
                                        onChange={(e) => {
                                        setRegisterEmail(e.target.value);
                                        }}>
                                    </input>

                                    <input 
                                        placeholder="password" 
                                        onChange={(e) => {
                                        setRegisterPassword(e.target.value);
                                        }}>
                                    </input>
                                    
                                    {/* <Link onClick={register}
                                        disabled={!(registerEmail  && registerPassword)}
                                        className="signUpBtn" to={{pathname:"/SearchResults", search:`?userid=${user}`}}>Sign Up</Link> */}

                                    <button onClick={register}
                                        disabled={!(registerEmail  && registerPassword)}
                                        className="signUpBtn">Sign Up</button>

                                    <button
                                        className="closeSignUp"
                                        onClick={toggleModal}
                                        >X
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Login;