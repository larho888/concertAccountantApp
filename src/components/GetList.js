import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import {firebase} from './Firebase';

const GetList = () => {
    const [createdList, setCreatedList] = useState([]);

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


export default GetList;