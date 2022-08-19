import { useState } from "react";
import { getDatabase, push, ref } from 'firebase/database';
import Firebase from './Firebase';

const AddShow = () => {

    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const database = getDatabase(Firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        setUserInput("");
    }

    return (
        <section>
            <div className="wrapper">
                <form action="submit" className="addShowForm">
                    <label htmlFor="showChosen">Add a to create your Workout</label>
                    <input type="text" id="showChosen" onChange={handleInputChange} value={userInput}/>
                    <button onClick={handleSubmit}>Choose a show</button>
                </form>
            </div>
        </section>
    )
}

export default AddShow;