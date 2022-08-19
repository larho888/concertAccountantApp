import axios from "axios";
import "./App.css";
import { useEffect, useState } from 'react';
import AddShow from "./Addshow";

function App() {

  const [ticket, setTicket] = useState({
    name: "",
    id: "",
    priceRanges: [],
  })

  const [data, setData] = useState([]);

  //userinput for keyword
  const [keyWord, setKeyWord] = useState('');

  //id on the selected event
  const [id, setId] = useState('');

  useEffect(() => {
    const key = `0TsZKUciU5HKm4ylnIBkwVoD8U4aPAgY`;
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        apikey: key,
        keyword:"drake",
        size: 10
      },
    }).then((response) => {
      const dataTest = response.data._embedded.events;
      setData(dataTest);
  })
  }, []);

  useEffect(() => {
    const key = `0TsZKUciU5HKm4ylnIBkwVoD8U4aPAgY`;
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events/${id}`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        apikey: key,
      },
    }).then((response) => {
      console.log(response.data.id)
      setTicket({
        name: response.data.name,
        id: response.data.id
      })
    })
  }, [id]);

  return (
    <div className="App">
        {data.map((data) => {
            return (
              <>
              <p key={data.id}>{data.name}</p>
              <p>{data.id}</p>
              <button onClick={() => {
                setId(data.id)

                }}>More info</button>
              <AddShow ticket={ticket}/>
              </>
            )
        
        })}
        <AddShow />
    </div>
  );
}

export default App;

// onclick save data.id of event into ID state
// run ID through API
// save API (will be an oject) into ticket state
// display info on screen



// PSUEDOCODE

//initialize firebase
// Create state items to hold data from the API and user input
// Create a component to display the information
// Create a component to hold userinput using "getDatabase" method
// Create a function to make the API call with the correct search parameters
// Userinput is linked to API call where user selects which items get added to the list
// This data is then sent to firebase
// Display the list the user makes as a public list
// Complete published lists page broken down by price
// Create a function to handle the remove, getDatabase and reference. getDatabase and reference would allow for the user to delete items from the list
// Error handling where if the user enters an invalid concert/show an alert pops up and if the user enters a negative budget

// STRETCH GOALS:
// Profanity API to allow appropiate names for the list
// Sorting and filtering search results
// Add a chart to show cost trends across multiple lists
// Pagination for search results
// Allow for the private list to be authenticated through google
