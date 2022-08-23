import { useState } from "react";
import { getDatabase, push, ref, remove } from 'firebase/database';
import firebase from './Firebase';


const AddShow = (props) => {

    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, props.ticket);
        // setUserInput("");
    }

    const handleRemove = () => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        remove(dbRef, props.ticket)
    }

    return (
        <section>
            <div className="wrapper">
                <button onClick={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>Save</button>
                <button onClick={(e) => {
                e.preventDefault();
                handleRemove();
                }}
                >remove</button>
            </div>
        </section>
    )
}

export default AddShow;