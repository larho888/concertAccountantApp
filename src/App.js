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

  const [moreInfo, setMoreInfo] = useState(false)
  
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

  const renderInfo = () => {
    return data.map((data) => {
    
      return (
        <div key={data.id}>
          <div>
            <img src={data.images[0].url} alt={data.name}/>
            <p>{data.name}</p>
            <p>{data._embedded.venues[0].name}</p>
            <p>{data._embedded.venues[0].city.name}</p>
            <p>{data._embedded.venues[0].address.line1}</p>
            <p>{data._embedded.venues[0].url}</p>
            <p>{data.dates.start.localDate}</p>
            <p>{data.dates.start.localTime}</p>
            <p>{data.dates.timezone}</p>

              {/* 
            <p>{data.priceRanges[0].currency}</p>
            <p>{data.priceRanges[0].min}</p>
            <p>{data.priceRanges[0].max}</p> */}
            <button onClick={() => {
              setId(data.id)
              setMoreInfo(true);
              console.log(id)
              }}
              >More info
            </button>
            <AddShow ticket={ticket}/>

          </div>
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
          // setSize(10)
          // {data.map((data) => {
            // console.log(data.name)
            // return (
            //   <><p key={data.id}>{data.name}</p><p>{data.id}</p><button onClick={() => {
            //     setId(data.id);
            //   } }>More info</button><AddShow ticket={ticket} /></>
            // )
    
              
        
        // })}
        }}>search</button>
        {show ? renderInfo() : <React.Fragment />}
          {/* {data.map((data) => {
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
        })} */}
    </div>
  );
}
// }

export default App;

// onclick save data.id of event into ID state
// run ID through API
// save API (will be an oject) into ticket state
// display info on screen



// PSUEDOCODE

//initialize firebase
// Create state items to hold data from the API and user input X
// Create a component to display the information X
// Create a component to hold userinput using "getDatabase" method X
// Create a function to make the API call with the correct search parameters X 
// Userinput is linked to API call where user selects which items get added to the list X
// This data is then sent to firebase X 
// Display the list the user makes as a public list O
// Complete published lists page broken down by price O 
// Create a function to handle the remove, getDatabase and reference. getDatabase and reference would allow for the user to delete items from the list X firebase O display on page
// Error handling where if the user enters an invalid concert/show an alert pops up and if the user enters a negative budget O 

// STRETCH GOALS:
// Profanity API to allow appropiate names for the list
// Sorting and filtering search results
// Add a chart to show cost trends across multiple lists
// Pagination for search results
// Allow for the private list to be authenticated through google
