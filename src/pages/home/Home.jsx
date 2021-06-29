import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';

import { ndaMonthlyData } from '../../data/dummyData';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={ndaMonthlyData} title="Scheduled Per Month" grid dataKey="monthly-episodes" />
    </div>
  )
}

export default Home;
