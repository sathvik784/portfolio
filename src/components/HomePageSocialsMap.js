import React from "react";
import Socials from "./HomePageSocials";

const SocialsMapped = ({socials}) => {
    return(
        <div className="flex gap-3 flex-wrap justify-center">
            {socials.map(social => (
                <Socials key={social.id} id={social.id} socialsData={social} />
                    )
                )}
        </div>
    );
}

export default SocialsMapped;
