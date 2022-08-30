import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";
import { getDatabase, push, ref, remove, set, update } from "firebase/database";
import Login from "./Login";

function Userlist ({e, currentUser}) {

const [budget, setBudget] = useState("")

const [budgetCosts, setBudgetCosts] = useState([])

useEffect(() => {
    const newArray = [];
    setBudget(e.budgetName)
    for (let key in e) {
        if (key !== "budgetName") {
            const newObject = {}
            newObject.totalBudget = key;
            newObject.concerts = e[key];
            newArray.push(newObject);
        }
    }
    setBudgetCosts(newArray);
}, [])

return (
    <div>
        {budgetCosts.map((e) => { 
                return (
                    <><h3>{e.concerts[0].budgetname}</h3>
                    <h4>{e.totalBudget}</h4>
                    <EventDetails e={e} currentUser={currentUser} /></>
                    
                )
            })}

    </div>
              

)

   
}

export default Userlist;