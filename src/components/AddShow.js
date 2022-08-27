import { useState } from "react";
<<<<<<< HEAD
import { getDatabase, push, ref, remove, set } from 'firebase/database';
import { firebase, auth } from './Firebase';


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
=======
import { getDatabase, push, ref, remove, set, update } from "firebase/database";
import { firebase } from "./Firebase";

const AddShow = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const moreUserSettings =   
  {
    name: props.ticket.name,
    min: props.ticket.max,
    max: props.ticket.min
  }


  console.log(moreUserSettings)


  const myList = () => {
    // Create a new post reference with an auto-generated id
    const db = getDatabase();
    const postListRef = ref(db, `/${props.currentUser}/${props.name}/${props.budget}`);
    const newPostRef = push(postListRef);
    update(newPostRef, moreUserSettings)
  };

  // const handleSubmit = () => {
  //     const database = getDatabase(firebase);
  //     const dbRef = ref(database);
  //     push(dbRef, props.ticket);
  //     // setUserInput("");
  // }

  const handleRemove = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    remove(dbRef, props.ticket);
  };

  return (
    <section>
      <div className="wrapper">
        <button
          onClick={(e) => {
            e.preventDefault();
            // handleSubmit();
            myList();
          }}
        >
          Save
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRemove();
          }}
        >
          remove
        </button>
      </div>
    </section>
  );
};
>>>>>>> 60440b669de7b750f74c071c062f08bb95e354c0

export default AddShow;