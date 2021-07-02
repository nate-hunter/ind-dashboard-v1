import React from 'react';
import { Link } from 'react-router-dom';

import './season.css';

const Season = () => {
  return (
    <div className="season">
      <div className="seasonTitleContainer">
        <h1 className="seasonTitle">NDA TV Season Page</h1>
        <Link to="/newSeason">
          <button className="seasonAddButton">Add Season</button>
        </Link>
      </div>
      <div className="seasonContainer">
        <div className="seasonShow">
          <div className="seasonShowTop">
            <div className="seasonShowTopTitle">
              <span className="seasonShowName">The Blacklist - Season 8</span>
              <span className="seasonShowStudio">Sony</span>
            </div>
            <div className="seasonShowTopStatusContainer">
              <span className="seasonShowTopStatusTitle">Status</span>
              <span className="seasonShowTopStatus">Finale'd</span>
            </div>
          </div>
          <div className="seasonShowBottom">
            <span className="seasonShowBottomInfoTitle">Season Details</span>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Episodes: </span>
              <span className="seasonShowInfo">22</span>
            </div>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Start Date: </span>
              <span className="seasonShowInfo">11/13/2021</span>
            </div>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Total Runtime: </span>
              <span className="seasonShowInfo">10:00:00</span>
            </div>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Bundle Pricing (WSP): </span>
              <span className="seasonShowInfo">$13.29 / $17.49</span>
            </div>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Episode Pricing (WSP): </span>
              <span className="seasonShowInfo">$1.40 / $2.40</span>
            </div>

            <span className="seasonShowBottomInfoTitle">Common Metadata</span>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Rating: </span>
              <span className="seasonShowInfo">TV-14</span>
            </div>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Sorts/Briefs: </span>
              <span className="seasonShowInfo">Blacklist</span>
            </div>

            <div className="seasonShowInfoContainer">
              <span className="seasonShowInfoLabel">Dolby 5.1: </span>
              <span className="seasonShowInfo">Yes</span>
            </div>

          </div>
        </div>

        {/* Update Season Section  */}
        <div className="seasonUpdate">
          <span className="seasonUpdateTitle">Update Season</span>
          <form className="seasonUpdateForm">
            <div className="seasonUpdateLeft">
              <div className="seasonUpdateItem">
                <label>Season Name</label>
                <input 
                  type="text" 
                  placeholder="The Blacklist" 
                  className="seasonUpdateInput" 
                />
              </div>

              <div className="seasonUpdateItem">
                <label>Season Number</label>
                <input 
                  type="text" 
                  placeholder="9" 
                  className="seasonUpdateInput" 
                />
              </div>

              <div className="seasonUpdateItem">
                <label>Start Date</label>
                <input 
                  type="text" 
                  placeholder="11/13/2021" 
                  className="seasonUpdateInput" 
                />
              </div>
            </div>
            <div className="seasonUpdateRight">
              <div className="seasonUpdateColorBlob">
                <div className="seasonUpdateColorBlobLines"></div>
                <div className="seasonUpdateColorBlobLines"></div>
                <div className="seasonUpdateColorBlobLines"></div>
                <div className="seasonUpdateColorBlobLines"></div>
                <div className="seasonUpdateColorBlobLines"></div>
                <div className="seasonUpdateColorBlobLines"></div>
                <div className="seasonUpdateColorBlobLines"></div>
              </div>
              <button className="seasonUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Season;
