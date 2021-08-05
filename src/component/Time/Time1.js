import React, { Component,PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 3,
   
  },
  {
    name: "Page B",
  
    pv: 2,
  
  },
  
];
export default class Time1 extends PureComponent {
  render() {
    return (
      <div>
          Time need to make chnages  (in hrs)  
          <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 300,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
      </div>
    );
  }
}
