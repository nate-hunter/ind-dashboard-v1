import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';

import WdgetSm from '../../components/widgetSm/WidgetSm';
import WdgetLg from '../../components/widgetLg/WidgetLg';

import { ndaMonthlyData } from '../../data/dummyData';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={ndaMonthlyData} title="Episodes Scheduled Per Month" grid dataKey="monthly-episodes" />
      <div className="homeWidgets">
        <WdgetSm />
        <WdgetLg />
      </div>
    </div>
  )
}

export default Home;
