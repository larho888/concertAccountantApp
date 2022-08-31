import { getDatabase, push, ref, update } from "firebase/database";

const AddShow = (props) => {

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
    const postListRef = ref(db, `/${props.userId}/${props.name}/${props.budget}`);
    const newPostRef = push(postListRef);
    update(newPostRef, moreUserSettings)
  };

  return (
    <section>
      <div className="wrapper">
        <button
        className="actionButton"
          onClick={(e) => {
          e.preventDefault();
          myList();
          }}>Save
          </button>
      </div>
    </section>
  );
};

export default AddShow;