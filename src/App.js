import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { FaBeer } from 'react-icons/fa';



function App() {
  return(
    <div>
      <Header />
      <SearchResults />
    </div>
  )
}

export default App;