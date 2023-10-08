import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import './search-results.css';
import { useContext } from "react";
import HousesContext from "../context/housesContext";

const SearchResults = () => {
    const allHouses = useContext(HousesContext);
    const { country } = useParams();
    const filteredHouses = allHouses.filter(h => h.country === country)
    return ( 
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table>
                <tbody>
                    {filteredHouses.map(h => (
                        <SearchResultsRow key={h.id} house={h}/>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default SearchResults;