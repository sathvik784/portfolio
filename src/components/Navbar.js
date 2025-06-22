import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/portfolio'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/education'>Experience</Link>
                </li>
                <li>
                    <Link to='/sideprojects'>Side Projects</Link>
                </li>
								{/* <li>
                    <Link to='/skills'>Skills</Link>
                </li> */}
            </ul>
            
        </nav>
    );
}

export default Navbar;