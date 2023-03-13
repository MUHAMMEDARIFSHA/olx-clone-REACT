import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div >
            <ul>
              <li className="list">Kolkata</li>
              <li className="list">Mumbai</li>
              <li className="list">Chennai</li>
              <li className="list">Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div >
            <ul>
              <li className="list">Bhubaneshwar</li>
              <li className="list">Hyderabad</li>
              <li className="list">Chandigarh</li>
              <li className="list">Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div >
            <ul>
              <li className="list">About OLX Group</li>
              <li className="list">Careers</li>
              <li className="list">Contact Us</li>
              <li className="list">OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div >
            <ul>
              <li className="list">Help</li>
              <li className="list">Sitemap</li>
              <li className="list">Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries <br></br> Pakistan - South Africa - Indonesia</p>
        <p>All rights reserved © 2006-2023 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
