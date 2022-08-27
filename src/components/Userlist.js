import { useEffect, useState } from "react";

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
            newArray.push(newObject);
        }
    }
    setBudgetCosts(newArray);
}, [])

console.log(budgetCosts);
   
}

export default Userlist;