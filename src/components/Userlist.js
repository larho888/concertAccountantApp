import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

function Userlist ({e}) {

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
            newObject.budgetName = newObject.concerts[0];
            newArray.push(newObject);
        }
    }
    setBudgetCosts(newArray);
}, [])

return (
    <div>
        {budgetCosts.map((e) => { 
                return (
                    
                    <><h3>{e.budgetName}</h3>
                    <h4>{e.totalBudget}</h4>
                    <EventDetails e={e} /></>
                    
                )
            })}

    </div>
              

)

   
}

export default Userlist;