import React from 'react';
import './topbar.css';

import { NotificationsNone, ToggleOn, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><span className="logo-first-letter">i</span>NDEMAND</span>
          <span>_NDA_</span>
          <span>_Library TV_</span>
          <span>_Anime_</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <ToggleOn />
          </div>
          <img src="https://res.cloudinary.com/pandaboogie/image/upload/v1622005789/lyujwxrbgbs7mssquqtb.jpg" alt="user-avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar;
