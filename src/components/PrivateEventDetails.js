import { getDatabase, ref, remove } from "firebase/database";
import { firebase } from "./Firebase";

function PrivateEventDetails ({e, currentUser}) {

const handleRemove = (currentUser , budgetName, budgetTotal, id) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${currentUser}/${budgetName}/${budgetTotal}/${id}`);
    remove(dbRef);
    }

return (
    <div>
        {e.concerts.map((item) => { 
            const id = item.id
            const name = item.budgetname
            const cost = item.budgetcost
                return (
                    <div className="eventDetails" key={id}>
                    <>
                    <h3>{item.name}</h3>
                    <p>min: ${item.max}</p>
                    <p>max: ${item.min}</p>
                    </>
                    <button onClick={(e) => {
                        handleRemove(currentUser , name , cost , id);
                    }}>remove</button>
                    </div>
                )
            })}
    </div>
    )
}

export default PrivateEventDetails;

