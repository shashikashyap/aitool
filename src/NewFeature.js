import React from 'react';
import Camera from "./Image/camera 1.png";

export default function NewFeature() {
  return (
    <div>
      {/* search bar */}
      <div className="search">
        <span className="zero">
          <h1>Welcome to AI-PLANET</h1>
          <br />
          <h3>A platfrom for all ai tools</h3>
        </span>
    
        <div className="two">
          <input
            type="text"
            name=""
            id=""
            className="search-input"
            placeholder="Search"
          />
        </div>

        {/* ai new feature */}
       
        <div className="camera ">
          <div className="text">
            <h2>Find Ai,</h2>
            <h3>with our new ai feature</h3>
          </div>

          <div className="image">
            
              <img src={Camera} alt="" />
              </div>
          </div>
        
      </div>
      <div className="core">
      <h1>AI-PLANET</h1>
      <h2>A platform where you can find all ai tools accoring to use </h2>

      </div>
    </div>
  )
}
