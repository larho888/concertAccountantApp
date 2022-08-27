import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Login from "./components/Login";
import GetList from "./components/GetList";
import { FaBeer } from 'react-icons/fa';



function App() {
  return(
    <div>
      <Header />
      <Login />
      <GetList />
      {/* <SearchResults /> */}
    </div>
  )
}

export default App;