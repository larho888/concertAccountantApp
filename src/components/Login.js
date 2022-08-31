import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './Firebase';
import Nav from "./Nav";
import Header from "./Header";

function Login () {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, loginRegisterEmail] = useState("");
    const [loginPassword, loginRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect (() => { onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser.uid);
    })
    }, [user]);

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
        }
    }

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error) {
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        
        <>
        <Nav user={user}/> 
        <Header />
        <div className="login">
            <div>
                <h3>Register</h3>
                <input placeholder="email" onChange={(e) => {
                    setRegisterEmail(e.target.value);
                } }></input>
                <input placeholder="password" onChange={(e) => {
                    setRegisterPassword(e.target.value);
                } }></input>

                <button onClick={register}>create user</button>
            </div>

            <div>
                <h3>Login</h3>
                <input placeholder="email" onChange={(e) => {
                    loginRegisterEmail(e.target.value);
                } }></input>
                <input placeholder="password" onChange={(e) => {
                    loginRegisterPassword(e.target.value);
                } }></input>
                <button onClick={login}>login</button>
            </div>

            <div>
                <h3>User logged in</h3>
                {user?.email}
                <button onClick={logout}>logout</button>
            </div>
        </div>
        </>

    )
}

export default Login;