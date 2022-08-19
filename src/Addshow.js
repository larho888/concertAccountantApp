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
                // console.log(props.id)
                // setUserInput(props.id)
                // console.log(userInput)
                handleSubmit();
                }}>Save</button>
                <button onClick={(e) => {
                e.preventDefault();
                handleRemove();
                }}
                >remove</button>
                {/* <form action="submit" className="addShowForm">
                    <label htmlFor="showChosen">Add a to create your Workout</label>
                    <input type="text" id="showChosen" onChange={handleInputChange} value={userInput}/>
                    <button onClick={handleSubmit}>Choose a show</button>
                </form> */}
            </div>
        </section>
    )
}

export default AddShow;