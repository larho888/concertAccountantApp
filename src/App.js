import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import GetList from "./components/GetList";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom"

function App({user}) {
  return(
    <div>

      <Header />  


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