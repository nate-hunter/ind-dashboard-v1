import React from 'react';
import { Link } from 'react-router-dom';
import { LineStyle, Timeline, BarChart, List, TableChart } from '@material-ui/icons';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                <span className="sidebarListText">Home</span>
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span className="sidebarListText">Analytics</span>
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              <span className="sidebarListText">Reports</span>
            </li>
            <Link to="/seasons" className="link">
              <li className="sidebarListItem">
                <TableChart className="sidebarIcon" />
                <span className="sidebarListText">Seasons</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
