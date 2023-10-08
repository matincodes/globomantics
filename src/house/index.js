import "./house.css";
import emailIcon from './Email.png'
import Inquiry from "./inquiry";
import { useState } from "react";
import PropTypes from 'prop-types'

const House = ({house}) => {
    const [inquiryShown, setInquiryShown] = useState(false);

    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    }
    return ( 
        <div className="mx-3">
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img src={emailIcon} height="50"  alt="Inquiry" onClick={inquiryClick} />
                    {inquiryShown && <Inquiry />}
                </div>
            </div>
        </div>
     );
};

House.propTypes = {
    house: PropTypes.object.isRequired
}
 
export default House;