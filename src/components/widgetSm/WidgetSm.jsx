import React from 'react';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New NDA Seasons</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">Below Deck Mediterranean - Season 6</span>
            <span className="widgetSmSeasonStudio">NBCU</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">Love & Hip Hop Atlanta - Season 10</span>
            <span className="widgetSmSeasonStudio">Viacom</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">So Freakin Cheap - Season 1</span>
            <span className="widgetSmSeasonStudio">Discovery</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">America's Top Dog - Season 2</span>
            <span className="widgetSmSeasonStudio">A&E</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">Top Chef: Amateurs Season 1</span>
            <span className="widgetSmSeasonStudio">NBCU</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">SharkFest - Season 6</span>
            <span className="widgetSmSeasonStudio">Fox</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">When Sharks Attack - Season 7</span>
            <span className="widgetSmSeasonStudio">Fox</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">SharkFest - Season 6</span>
            <span className="widgetSmSeasonStudio">Fox</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widetSmSeason">
            <span className="widgetSmSeasonName">Miracle Workers - Season 3 (Pre-Order)</span>
            <span className="widgetSmSeasonStudio">Turner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm;
