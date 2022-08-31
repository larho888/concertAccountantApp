import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import {firebase} from './Firebase';
import UserList from './UserList';

const GetList = () => {
    const [createdList, setCreatedList] = useState([]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            const newArray = [];
            const data = res.val();
            for(let key in data){
                const budgetNames = data[key];
                for (let budgetName in budgetNames) {
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
                }
            }
            setCreatedList(newArray);
        })
    }, [])

    return (
        <>
        {createdList.map((e) => { 
            return (
                <section>
                    <div className='wrapper'>
                        <h2>Public List Page</h2>
                    
                        <div className='publicListContainer'>
                            <ul className='publicList'>
                                <li>
                                    <UserList e={e} /> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                )
        })}
        </>
    )
}

export default GetList;