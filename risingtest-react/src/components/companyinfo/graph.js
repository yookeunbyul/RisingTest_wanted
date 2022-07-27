import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const data = [
    {
      name: 'Jul 21',
      '전체 인원수': 9,
    },
    {
        name: 'Jul 21',
        '전체 인원수': 10,
      },
      {
        name: 'Jul 21',
        '전체 인원수': 8,
      },
      {
        name: 'Jul 21',
        '전체 인원수': 10,
      },
      {
        name: 'Jul 21',
        '전체 인원수': 10,
      },
      {
        name: 'Jul 21',
        '전체 인원수': 10,
      },
      {
        name: 'Jul 21',
        '전체 인원수': 10,
      },
  ];


  export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0" stroke="#fff"/>
            <XAxis dataKey="name" stroke="#e1e2e3"/>
            <YAxis stroke="#e1e2e3"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="전체 인원수" stroke="rgb(37, 139, 247)" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }
  