import { useState } from "react";
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
    max: props.ticket.max,
    min: props.ticket.min,
    budgetname: props.name,
    budgetcost: props.budget
  }

  const myList = () => {
    // Create a new post reference with an auto-generated id
    const db = getDatabase();
    const postListRef = ref(db, `/${props.currentUser}/${props.name}/${props.budget}`);
    const newPostRef = push(postListRef);
    update(newPostRef, moreUserSettings)
  };

  const handleRemove = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${props.currentUser}`);
    console.log(dbRef)
    // remove(dbRef, "0zVKC8rSa8dVLf1KZy8pq4OnxNA2");
  };

  return (
    <section>
      <div className="wrapper">
        <button
          onClick={(e) => {
            e.preventDefault();
            myList();
          }}
        >
          Save
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRemove();
          }}>
          remove
        </button>
      </div>
    </section>
  );
};

export default AddShow;