import { useState , useEffect } from "react"
import { getDatabase, push, ref, remove, set, update, onValue } from "firebase/database";
import { firebase } from "./Firebase";
import GetList from "./GetList";


function EventDetails ({e, currentUser}) {

const [uniqueId, setUniqueId] = useState("")

const [budgetName, setBudgetName] = useState("");

const [budgetTotal, setBudgetTotal] = useState(0);

const handleRemove = (currentUser , budgetName, budgetTotal, id) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${currentUser}/${budgetName}/${budgetTotal}/${id}`);
    remove(dbRef);
    console.log(dbRef)
    console.log(currentUser , budgetName, budgetTotal, id)
    }

// useEffect(() => {
//     handleRemove(uniqueId)
// }, [uniqueId])


return (
    <div>
        {e.concerts.map((item) => { 
            const id = item.id
            const name = item.budgetname
            const cost = item.budgetcost
            // console.log(e)
                return (
                    <div key={id}>
                    <><p>{item.max}</p><p>{item.min}</p><h3>{item.name}</h3></>
                    <button onClick={(e) => {
                        // setUniqueId(id)
                        // setBudgetName(name)
                        // setBudgetTotal(cost)
                        handleRemove(currentUser , name , cost , id);
                    
                    }}>remove</button>
                    </div>
                )
            })}
    </div>
)
   
}

export default EventDetails;

