import React from 'react';
import './newSeason.css';

const NewSeason = () => {
  return (
    <div className="newSeason">
      <h1 className="newSeasonTitle">New Season</h1>
      <form className="newSeasonForm">
        <div className="newSeasonItem">
          <label>Season Name</label>
          <input type="text" placeholder="Season Name..." />
        </div>
        <div className="newSeasonItem">
          <label>Season Number</label>
          <input type="number" placeholder="Season Number..." />
        </div>
        <div className="newSeasonItem">
          <label>Start Date</label>
          <input type="date" placeholder="Start Date..." />
        </div>
        <div className="newSeasonItem">
          <label>Studio</label>
          <select  className="newSeasonSelect" name="studio" id="studio">
            <option value="a&e">A&E</option>
            <option value="bbc">BBC</option>
            <option value="cbs">CBS</option>
            <option value="discovery">Discovery</option>
            <option value="fox">Fox</option>
            <option value="sony">Sony</option>
            <option value="wb">WB</option>
          </select>
        </div>
        <div className="newSeasonItem">
          <label>Type</label>
          <div className="newSeasonStatus">
            <input type="radio" name="status" id="nda" value="nda" />
            <label for="nda">NDA</label>
            <input type="radio" name="status" id="library" value="library" />
            <label for="library">Library TV</label>
            <input type="radio" name="status" id="anime" value="anime" />
            <label for="anime">Anime</label>
          </div>
        </div>
        <div className="newSeasonItem">
          <label>Status</label>
          <select className="newSeasonSelect" name="status" id="status">
            <option value="ready">Ready to Schedule</option>
            <option value="error">Has Errors</option>
            <option value="finaled">Finale'd</option>
          </select>
        </div>
        <button className="newSeasonButton">Create Season</button>
      </form>
    </div>
  )
}

export default NewSeason;
