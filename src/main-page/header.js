import logo from "./GloboLogo.png";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HouseFilter from "./house-filter";
import { useContext } from "react";
import HousesContext from "../context/housesContext";
const Header = ({subtitle}) => {
    const allHouses = useContext(HousesContext)
    return(
        <Fragment>
            <header className="row">
                <div className="col-md-5">
                <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="col-md-7 mt-5 subtitle">
                {subtitle}
                </div>
            </header>
            <HouseFilter allHouses={allHouses}/>
            <Outlet/>
        </Fragment>
    );
};

export default Header;