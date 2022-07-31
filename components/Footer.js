import React from "react";
import LOGO from './images/logo.svg';
const Footer = () =>{
    return(
        <div className="footer">
            
            <div className="grid-items">
                <div className="footer-logo">
                    <img  src={LOGO} alt=''/>
                </div>
              
                <div className="features">
                    <h5>Features</h5>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className="resources">
                    <h5>Resources</h5>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="company">
                    <h5>Company</h5>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
            
            </div>
            <div className="bottom-line">
               <p>Coded by </p> <a className="codded-by" href="">Sivan Glik.</a>
            </div>
            
        </div>
    )
    
}
export default Footer