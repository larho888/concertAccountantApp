import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
import PrivateUserlist from './PrivateUserList';
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
        <><Nav user={currentUser} /><Header /><h2>Private List Page</h2><div>
            {createdList.map((e) => {
                console.log(e)
                return (
                    <section>
                        <div className='wrapper'>
                            <div className='publicListContainer'>
                                <ul className='publicList'>
                                    <li key={e.budgetName}>
                                        <PrivateUserlist e={e} currentUser={currentUser} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                );
            })}
        </div></>
                
    )
}

export default GetPrivateList;