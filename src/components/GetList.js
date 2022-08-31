import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
import Userlist from './Userlist';
import { useSearchParams } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';

const GetList = () => {
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
                        // arrayOfConcerts.push(budgetName)
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
                            listDetails.id = id
                            arrayOfConcerts.push(listId[id])
                        } 
                    }
                    newArray.push(newObject)
                }
            }
           
            // for(let key in newArray){
            //     newerArray.push({key:key, value:newArray[key]})
            // }
            setCreatedList(newArray);
        })
    }, [])

    return (
        <>
        <Nav user={currentUser} />
        <Header />
        <div>
            {createdList.map((e) => {
                console.log(e)
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

export default GetList;