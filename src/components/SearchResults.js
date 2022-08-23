// import "./App.scss";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import AddShow from "./AddShow";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const SearchResults = () => {
 const [ticket, setTicket] = useState({
    name: "",
    id: "",
    max: "",
    min: "",
    venue: "",
    time: "",
    timezone: "",
    address: "",
    url: ""
  })
  const [data, setData] = useState([]);

  const [keyWord, setKeyWord] = useState('');

  const [id, setId] = useState('');

  const [track, setTracker] = useState(0);

  const [show, setShow] = useState(false);

  const [moreInfo, setMoreInfo] = useState(false)

  const [name, setName] = useState("");

  const [budget, setBudget] = useState(0);

    //api key
  const key = `0TsZKUciU5HKm4ylnIBkwVoD8U4aPAgY`;
 
    //asynchronous axios call with an await to get our api call when we want
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
      console.log(response)
      const dataTest = response.data._embedded.events;
      setData(dataTest);
    }).catch((error) => {
      alert(error.message)
    });
  } 
  
    //use effect axios call to store our api in the id state
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
      console.log(response.data);
      // console.log(response.data.dates.start.dateTime)
      setTicket({
        name: response.data.name,
        id: response.data.id,
        time: (
            id === ""
              ?
              'n/a'
              :
              (
                new Date(response.data.dates.start.dateTime).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })
              )
              ) 
          
          ,
        timezone: (
          id === ""
          ? 
          'n/a'
          :
          (response.data.dates.timezone)
          ),
        address: (
          id === ""
          ?
          'n/a'
          :
          (response.data._embedded.venues[0].address.line1)
          ),
        url: (
          id === ""
          ?
          'n/a'
          :
          (response.data._embedded.venues[0].url)
          ),
        max: (             
               response.data.priceRanges === undefined
            ? 
             'n/a'
            :
                (response.data.priceRanges[0].max)
        ),
        min: (             
               response.data.priceRanges === undefined
            ? 
             'n/a'
            :
                (response.data.priceRanges[0].min)
        ),
        venue: (
          id === ""
          ?
          'n/a'
          :
          (response.data._embedded.venues[0].city.name)
          )
      })
    })
  }, [id]);
  
  //Named function to be called on an event that will display more information on out api call   
  const getMoreInfo = () => {
    return(
      // <div>
      <div key={ticket.name} className="borderStyle">
            <p>{ticket.venue}</p>
            <p>{ticket.address}</p>
            <p>{ticket.timezone}</p>
            <p>{ticket.time}</p>

            {
              ticket.url === undefined
              ?
              <p>link not available</p>
              :
              <a href={ticket.url} target="_blank" rel="noreferrer">Ticket</a>
            }

          </div>
        // </div>
      )
  }

    //Named function that will map over our api array and return the relevant search results for our user.
  const renderInfo = () => {
    return data.map((data) => {
      return (
        <div key={data.id}>
          <div>
            <img src={data.images[0].url} alt={data.name}/>
            <p>{data.name}</p>
            <p>{data._embedded.venues[0].name}</p>
            <p>{data.dates.start.localDate}</p>
            {/* conditionally rendoring our call to the getmoreinfo function   */}

            {/* error handle to due to some api calls not containing a price range object */}
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
              </div> 
              
            }        
            {data.id === ticket.id && getMoreInfo()}
          {/* event listener on our button to send the corresponding id stored in state as well as changing our moreInfo state to true */}
            <button onClick={() => {
              setMoreInfo(true);
              setId(data.id)
              console.log(ticket.url)
              // console.log(ticket.max)
              // console.log(ticket.min)

              }}
              >More info
            </button>
            {/* passing our addshow component that will handle the removal of adding user selected show into firebase */}
            <AddShow ticket={ticket} name={name} budget={budget}/>
          </div>
        </div>
      )
  })}

    //returning our rendered info named component, calling our getanswer function with our stored promised axios call
  return (
    <div className="App wrapper">
        <input placeholder="insert list name" type="text" onChange={(e) => { setName(e.target.value)}}></input>
        <input placeholder="insert budget" type="number" onChange ={(e) => { setBudget(e.target.value)}}></input>
        <input value={keyWord} placeholder="Search for an Event" type="text" onChange={(e) => {
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

export default SearchResults;