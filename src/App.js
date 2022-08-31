import "./App.scss";
import SearchResults from "./components/SearchResults";
import GetList from "./components/GetList";
import GetPrivateList from "./components/GetPrivateList";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return(
    <div> 
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/GetList" element={<GetList />}/>
          <Route path="/GetPrivateList" element={<GetPrivateList /> } />
      </Routes>  
    <Footer />
    </div>
  )
}
export default App;