import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from 'react';
import AddShow from "./Addshow";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

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

  const [track, setTracker] = useState(0);

  const [size, setSize] = useState(0);

  const [show, setShow] = useState(false);

  const [moreInfo, setMoreInfo] = useState(false);
  
  const key = `0TsZKUciU5HKm4ylnIBkwVoD8U4aPAgY`;

  const getAnswer = async () => {
    await axios({
      url: `https://app.ticketmaster.com/discovery/v2/events`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        apikey: key,
        keyword: keyWord,
        size: 10
      },
    }).then((response) => {
      const dataTest = response.data._embedded.events;
      setData(dataTest);
  }).catch((error) => {
    alert(error.message)
  });
} 

  useEffect(() => {
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events/${id}`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        apikey: key,
      },
    }).then((response) => {
      setTicket({
        name: response.data.name,
        id: response.data.id
      })
    })
  }, [id]);

  console.log(ticket);

  const getMoreInfo = () => {
    return (
      <div key={ticket.id}>
        <p>{ticket.id}</p>
      </div>
    )
  }
  
  const renderInfo = () => {
    return data.map((data) => {
      return (
        <div key={data.id}>
          <p>{data.name}</p>
          <p>{data.id}</p>


          {  
                 data.priceRanges === undefined
              ? 
                <div>
                  <p>Price Range not available</p>
                </div>
              :
              <div>
                  <p>{data.priceRanges[0].currency}</p>
                  <p>{Math.round(data.priceRanges[0].min)}</p>
                  <p>{Math.round(data.priceRanges[0].max)}</p>
                  <p>
              {new Date(data.dates.start.dateTime).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
                </div> 
            }


          {data.id === ticket.id && getMoreInfo()}
          <button onClick={() => {
            setId(data.id)
            setMoreInfo(true);
            }}>More info</button>
          <AddShow ticket={ticket}/>
          </div>
      )
  })}

  return (
    <div className="App">
        <input value={keyWord} placeholder="insert keyword" type="text" onChange={(e) => {
          setKeyWord(e.target.value)
        }} ></input>
        <button onClick={(e) => {
          e.preventDefault()
          setTracker(prevCount => prevCount +1);
          setShow(true);
          getAnswer();
        }}>search</button>
        {show ? renderInfo() : <React.Fragment />}
    </div>
  );
}
// }

export default App;

// onclick save data.id of event into ID state
// run ID through API
// save API (will be an oject) into ticket state
// display info on screen



// PSUEDO Code

// Phase 1 (Need to figure out / Focus on Data structure sent to Firebase)
    // User can enter a name for their own named list (sent to firebase as an empty object)
    // User can add nested budget
        // a Min budget value
        // a Max budget value for their list (which will be added to firebase under their named object) 

// Phase 2 
    // User can search for a show X

// Phase 3
    // Search results displayed with relevant info X

// Phase 4
    // User can add shows to their list (functionality present)

// Phase 5
    // What user added to their list will be displayed (getDatabase method)
    // Min / max values will be subtracted by their budget, difference shown
    // when minimum budget is met an alert (NEED to figure out)

// Phase 6
    // User list will not be routed, but showed on same page
    // User can remove shows from their list (getDatabase/ref/remove method)

// Phase 7
    // User's list can have the option / button to be published

// Phase 8
    // User's published list will be routed to a public published pages section
    // lists broken down by price (ex. $100, $200)

// Phase 9
    // error handle for:
        // if user search input is not an event
        // if no price range is included
        // if budget limit is reached
        // if api is down 


// STRETCH GOALS:
// Profanity API to allow appropriate names for the list
// Sorting and filtering search results
// Add a chart to show cost trends across multiple lists
// Pagination for search results
// Allow for the private list to be authenticated through google