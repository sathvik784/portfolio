import React from "react";
import Socials from "./HomePageSocials";
import '../styles/Home.css'

const SocialsMapped = ({socials}) => {
    return(
        <div>
            {socials.map(social => (
                <Socials id={social.id} socialsData={social} />
                    )
                )}
        </div>
    );
}

export default SocialsMapped;