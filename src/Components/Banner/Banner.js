import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div >
            <span className="otherQuickOptions">Cars</span>
            <span className="otherQuickOptions">Motorcycle</span>
            <span className="otherQuickOptions">Mobile Phones</span>
            <span className="otherQuickOptions">For Sale:Houses & Apartment</span>
            <span className="otherQuickOptions">Scooters</span>
            <span className="otherQuickOptions">Commercial & Other Vehicles</span>
            <span className="otherQuickOptions">For Rent: House & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img className='banner-img'
            src="https://statics.olx.in/olxin/banners/hero_bg_in_v4@1x.png"
            alt="banner"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
