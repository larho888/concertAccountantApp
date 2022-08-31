import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

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
}, [e])

// return (
//     <div>
//         {budgetCosts.map((e) => { 
//                 return (
//                     <><h3>{e.concerts[0].budgetname}</h3>
//                     <h4>{e.totalBudget}</h4>
//                     <EventDetails e={e} currentUser={currentUser} /></>
                    
//                 )
//             })}

//     </div>
              

// )

return(
    <>
		{budgetCosts.map((e) => {
			return(
				<>
				{
					e.totalBudget > 500 
					? 
					<>
						<h2>Over $500 Lists</h2>
						<div className="userList">
							<h3 className="listTitle">List name: {e.concerts[0].budgetName}</h3>
							<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
							<EventDetails e={e}/>
						</div>
					</>
					: 
					<> 
						<h2>Under $500 Lists</h2>
						<div className="userList">
							<h3 className="listTitle">List name: {e.concerts[0].budgetName}</h3>
							<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
							<EventDetails e={e}/>
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