import React from "react";
import '../styles/Home.css'

const Socials = ({ socialsData }) => {
    return(
        <div className="socialsContainer">
            <a href={socialsData.mediaLink}>
                <button>{socialsData.mediaType}</button>
            </a>
        </div>
    );
}

export default Socials;