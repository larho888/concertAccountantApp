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

return(
    <>
		{budgetCosts.map((e) => {
			console.log(e)
			return(
				<>
				{
					e.totalBudget > 500 
					? 
					<>
					<h2>Over $500 Lists</h2>
				<div className="userList">
					<h3 className="listTitle">
					List name: {e.budgetName}
					</h3>
					<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
					<EventDetails e={e}/>
					<button
					
                    onClick={(e) => {
                    e.preventDefault();
                    }}
                    >remove
              
					</button>
				</div>
					
					</>
					: 
					<> 
					<h2>Under $500 Lists</h2>
				<div className="userList">
					<h3 className="listTitle">
					List name: {e.budgetName}
					</h3>
					<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
					<EventDetails e={e}/>
					<button
					
                    onClick={(e) => {
                    e.preventDefault();
                    }}
                    >remove
              
					</button>
				</div>
					</>
		
				}
				</>
			)
		})}
	</>
)


}

export default Userlist;