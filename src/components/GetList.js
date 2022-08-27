import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import {firebase} from './Firebase';
=======
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
import Userlist from './Userlist';
>>>>>>> 60440b669de7b750f74c071c062f08bb95e354c0

const GetList = () => {
    const [createdList, setCreatedList] = useState([]);

<<<<<<< HEAD
    useEffect(() => {

        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            // console.log(res)
            const newArray = [];
            const data = res.val();
            for(let key in data){
                newArray.push({key:key, value:data[key]});
            }
            const myData = Object.values(newArray);
            setCreatedList(myData);


        })
    }, [])
    console.log(createdList)

    return (
        <ul>
            {
                createdList.map((eventList) => {
                    return (
                        <li key={eventList.key}>
                            <p>{eventList.value}</p>
                        </li>
                    )
                })
            }
        </ul>
    )

}


=======
    const {word, setWord} = useState([]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            const newArray = [];
            // const newerArray =[];
            const data = res.val();
            // console.log(data)
            for(let key in data){
                // newArray.push({key:key, value:data[key]});
                // console.log(data[key])
                const budgetNames = data[key];
                // console.log(subData)
                for (let budgetName in budgetNames) {
                    const newObject = {budgetName:budgetName};
                    const budgetObject = budgetNames[budgetName];
                    for (let budgetCost in budgetObject) {
                        newObject[budgetCost] = []
                        const arrayOfConcerts = newObject[budgetCost] 
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
                            arrayOfConcerts.push(listId[id])
                            // for (let details in listDetails) {
                            //     const currentDetail = listDetails[details];
                            //     newBudgetObject[details] = currentDetail;
                            // }

                        } 
                    }
                    newArray.push(newObject)
                }
            }

            // console.log(newArray)
           
            // for(let key in newArray){
            //     newerArray.push({key:key, value:newArray[key]})
            // }
            setCreatedList(newArray);
        })
    }, [])

    // console.log(createdList)

    return (
        <div>
            <ul>
                {createdList.map((e) => { 
                    return (
                        <Userlist e={e} /> 
                    )
                    
                    
                })}
            </ul>
        </div>
    )

    // return(
    //     <div>
    //         <ul>
    //             {createdList.map((eventList) => {
    //                 const name = (Object.keys(eventList.value))
    //                 name.map((event) => {
    //                     const something = (eventList.value[event])
    //                     const see = (Object.keys(something))
    //                     see.map((e)=> {                            
    //                         return(
    //                             <p>(e)</p>
    //                         )
    //                     })
    //                 })
    //                 return(
    //                     <li key={eventList.key}>
    //                         <p>{name}</p>
                       
                            
    //                     </li>
                    
    //                 )
    //             })}
    //              {/* {word.map((event) => {
    //                     const something = (createdList.value[event])
    //                     const see = (Object.keys(something))
    //                     see.map((e)=> {
                            
    //                         return(
    //                             <p>(e)</p>
    //                         )
    //                     })
    //                 })} */}
    //         </ul>
    //     </div>
    // )
}

>>>>>>> 60440b669de7b750f74c071c062f08bb95e354c0
export default GetList;