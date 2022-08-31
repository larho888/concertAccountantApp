import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import GetList from "./components/GetList";
import GetPrivateList from "./components/GetPrivateList";
import { FaBeer } from 'react-icons/fa';
import Login from "./components/Login";
import { Link, Routes, Route } from "react-router-dom"

function App({user}) {
  return(
    <div>

      <Header />  
      {/* <Login /> */}


      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/components/SearchResults" element={<SearchResults user={user} />} />
          <Route path="/components/GetList" element={<GetList user={user}/>}/> 
          <Route path="/components/GetPrivateList" element={<GetPrivateList user={user}/> } />
       
      </Routes>  
    </div>
  )
}
export default App; 