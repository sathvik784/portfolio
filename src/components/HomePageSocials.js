import React from "react";

const Socials = ({ socialsData }) => {
    return(
        <div className="buttons">
            <a href={socialsData.mediaLink}>
                <button id="mediatype">{socialsData.mediaType}</button>
            </a>
        </div>
    );
}

export default Socials;