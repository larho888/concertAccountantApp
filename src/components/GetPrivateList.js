import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue} from 'firebase/database';
import {firebase} from './Firebase';
import UserList from './UserList';
import { Link } from "react-router-dom";

const GetPrivateList = (props) => {
    const [createdList, setCreatedList] = useState([]);

    const [word, setWord] = useState("");

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            const newArray = [];
            const data = res.val();
            for(let key in data){
                const budgetNames = data[key];
                if (key === `${props.user.uid}`) { for (let budgetName in budgetNames) {
                    const newObject = {budgetName:budgetName};
                    const budgetObject = budgetNames[budgetName];
                    for (let budgetCost in budgetObject) {
                        newObject[budgetCost] = []
                        const arrayOfConcerts = newObject[budgetCost] 
                        arrayOfConcerts.push(budgetName)
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            arrayOfConcerts.push(listId[id])
                        } 
                    }
                    newArray.push(newObject)
                }}
            }
            setCreatedList(newArray);
        })
    }, [word])

   

    return (
        <>
        <div>
        <button onClick={(e) => {
            e.preventDefault();    
            setWord(props.user.uid);
        }}>set
        </button>

        </div>
        <div>
            {createdList.map((e) => {
                return (
                    <div>
                        <Link to="/components/SearchResults">Search For An Event</Link>
                        <ul>
                            <li><UserList e={e} /> </li>
                       
                        </ul>

                    </div>
                );
            })}
        </div>
        </>
    )
}

export default GetPrivateList;