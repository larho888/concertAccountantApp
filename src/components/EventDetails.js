import { useEffect, useState } from "react";

function EventDetails ({e}) {

const [event, setEvent] = useState("")

const [eventDetails, setEventDetails] = useState([])

// useEffect(() => {
//     const newArray = [];
//     for (let key in e) {
//         const newObject = []
//         newArray.push(e.concerts);
//     }
//     setEventDetails(newArray);
// }, [])

// // console.log(eventDetails)

return (
    <div>
        {e.concerts.map((e) => { 
            console.log(e)
                return (
                    <div>
                    <><p>{e.max}</p><p>{e.min}</p><h3>{e.name}</h3></>
                    </div>
                    
                )
            })}

    </div>
              

)

// console.log(budgetCosts);
   
}

export default EventDetails;

