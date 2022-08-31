import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import GetList from "./components/GetList";
import GetPrivateList from "./components/GetPrivateList";
import Nav from "./components/Nav";
import { FaBeer } from 'react-icons/fa';
import Login from "./components/Login";
import { Link, Routes, Route } from "react-router-dom"

function App() {
  return(
    <div> 
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/GetList" element={<GetList />}/>
          <Route path="/GetPrivateList" element={<GetPrivateList /> } />
      </Routes>  
    </div>
  )
}
export default App;