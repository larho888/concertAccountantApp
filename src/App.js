import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Login from "./components/Login";
import { FaBeer } from 'react-icons/fa';



function App() {
  return(
    <div>
      <Header />
      <Login />
      {/* <SearchResults /> */}
    </div>
  )
}

export default App;