import { useState } from "react";
import { getDatabase, push, ref, remove, set } from 'firebase/database';
import firebase from './Firebase';


const AddShow = (props) => {

    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const myList = () => {
        // Create a new post reference with an auto-generated id
        const db = getDatabase();
        const postListRef = ref(db, props.name);
        // console.log(postListRef._path.pieces_[0])
        const newPostRef = push(postListRef);
        set(newPostRef, {
            name: props.ticket.name,
            budget: props.budget,
            min: props.ticket.max,
            max: props.ticket.min
        });
    }

    // const handleSubmit = () => {
    //     const database = getDatabase(firebase);
    //     const dbRef = ref(database);
    //     push(dbRef, props.ticket);
    //     // setUserInput("");
    // }

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
                // handleSubmit();
                myList();
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