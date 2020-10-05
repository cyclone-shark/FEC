import React, { PureComponent, useEffect, useRef, useState } from 'react';
import { LabelList,BarChart, Area, Bar, YAxis, XAxis,  Tooltip, Legend, CartesianGrid} from 'recharts';


const data = [
  
  {
    value: 20,
    name: '4 stars'
  },
  {
    value: 60,
    name: '3 stars'
  },
  {
    value: 30,
    name: '5 stars'
  },
];

export default class RatingBar extends PureComponent {
  
  render() {
    return (
      <BarChart
        width={300}
        height={100}
        data={data}
        layout='vertical'
        margin={{
          top: 20, right: 10, left: 30, bottom: 10
        }}>
        <XAxis tick={false} axisLine={false} domain={[0,100]}/>
        <YAxis type="category" dataKey="name"
          tickLine={false} axisLine={false}/>
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} barSize={10}/>
      </BarChart>
    );
  }
}