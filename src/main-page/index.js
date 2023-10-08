import "./main-page.css";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HousesContext from "../context/housesContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses)
  
  
  return(
    <HousesContext.Provider value={allHouses} >
      <Routes>
          <Route path="/" element={<Header subtitle={`Providing houses all over the world`} allHouses={allHouses} />}>
            <Route index element={<FeaturedHouse house={featuredHouse} />}/>
            <Route path="searchresults/:country" element={<SearchResults allHouses={allHouses}/>}/>
            <Route path="house/:id" element={<HouseFromQuery allHouses={allHouses}/>}/>
          </Route>
      </Routes>
      </HousesContext.Provider>
  )
}

export default App;
