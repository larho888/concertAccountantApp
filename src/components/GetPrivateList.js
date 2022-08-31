import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
import Userlist from './Userlist';
import { useSearchParams } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';

const GetPrivateList = () => {
    const [createdList, setCreatedList] = useState([]);

    const [currentUser, setCurrentUser] = useState('');

    const [searchParams] = useSearchParams();

    useEffect(() => {
        setCurrentUser((searchParams.get("userid")));
      })

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            const newArray = [];
            const data = res.val();
            for(let key in data){
                const budgetNames = data[key]; 
                if (key === `${currentUser}`) {
                for (let budgetName in budgetNames) {
                    console.log(budgetNames)
                    const newObject = {budgetName:budgetName};
                    const budgetObject = budgetNames[budgetName];
                    for (let budgetCost in budgetObject) {
                        newObject[budgetCost] = []
                        const arrayOfConcerts = newObject[budgetCost] 
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
                            listDetails.id = id
                            arrayOfConcerts.push(listId[id])
                        } 
                    }
                    newArray.push(newObject)
                }}
            }
            setCreatedList(newArray);
        })
    }, [currentUser])

    return (
        <>
        <Nav user={currentUser} />
        <Header />
        <div>
            {createdList.map((e) => {
                return (
                    <div>
                        <ul>
                            <li key={e.budgetName}><Userlist e={e} currentUser={currentUser} /> </li>
                        </ul>
                    </div>
                );
            })}
        </div></> 
    )
}

export default GetPrivateList;