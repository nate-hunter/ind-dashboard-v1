import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.css';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Scheduled Episodes</span>
        <div className="featuredScheduledContainer">
          <span className="featuredScheduled">650 </span>
          <span className="featuredScheduledRate">-33 <ArrowDownward className="featuredIcon neg" /></span>
        </div>
        <div className="featuredSubtitle">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Seasons</span>
        <div className="featuredScheduledContainer">
          <span className="featuredScheduled">12</span>
          <span className="featuredScheduledRate">+3<ArrowUpward className="featuredIcon" /></span>
        </div>
        <div className="featuredSubtitle">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Finales</span>
        <div className="featuredScheduledContainer">
          <span className="featuredScheduled">6</span>
          <span className="featuredScheduledRate">-2<ArrowDownward className="featuredIcon neg" /></span>
        </div>
        <div className="featuredSubtitle">Compared to last month</div>
      </div>      
    </div>
  )
}

export default FeaturedInfo;
