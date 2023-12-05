import React from "react";

const Socials = ({ socialsData }) => {
    return(
        <div className="buttons">
            <button>{socialsData.mediaLink}</button>
        </div>
    );
}

export default Socials;