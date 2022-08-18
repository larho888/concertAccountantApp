import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

const key = `0TsZKUciU5HKm4ylnIBkwVoD8U4aPAgY`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

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
