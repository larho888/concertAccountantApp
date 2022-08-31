import React from "react";
import { useState } from "react";

function SignUp () {
    const [ modal, setModal ] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
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
            </div>
            <button 
                onClick={toggleModal}
                className="signUpBtn"> 
                    <a href=""> Sign Up</a>
            </button>
        </div>
    )
}

export default SignUp;