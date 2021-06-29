import React from 'react';
// import * as d3 from 'd3';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ title, data, dataKey, grid }) => {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart data={data}>
          <Legend />
          <XAxis dataKey={dataKey} stroke="slateblue" />
          <YAxis stroke="slateblue" />
          <Line type="monotone" dataKey="Episodes" stroke="mediumslateblue" />
          <Line type="monotone" dataKey="New Seasons" stroke="green" />
          <Line type="monotone" dataKey="Finales" stroke="#F99595" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
