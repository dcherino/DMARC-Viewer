import React from 'react';
import { AreaChart } from 'react-charts-d3';
import { AppProps } from '../../types';
import parseDate from '../../utils/parseDate';
import { ChartWrapper } from './Chart.styles';

function randomNumber() {
  return Math.random() * (40 - 0) + 0;
}

const data2 = [
  {
    key: 'Group 1',
    values: [
      { x: 'A', y: randomNumber() },
      { x: 'B', y: randomNumber() },
      { x: 'C', y: randomNumber() },
      { x: 'D', y: randomNumber() },
    ],
  },
  {
    key: 'Group 2',
    values: [
      { x: 'A', y: randomNumber() },
      { x: 'B', y: randomNumber() },
      { x: 'C', y: randomNumber() },
      { x: 'D', y: randomNumber() },
    ],
  },
  {
    key: 'Group 3',
    values: [
      { x: 'A', y: randomNumber() },
      { x: 'A', y: randomNumber() },
      { x: 'A', y: randomNumber() },
      { x: 'A', y: randomNumber() },
      { x: 'B', y: randomNumber() },
      { x: 'C', y: randomNumber() },
      { x: 'D', y: randomNumber() },
    ],
  },
];

const Chart = ({ data }: AppProps) => {
  const values: { x: string; y: number }[] = [];
  const valuesDMARC: { x: string; y: number }[] = [];

  // Email by date
  data.messages.map((message, i, arr) => {
    const dateString = parseDate(message.date);
    const occ = arr.filter((m) => parseDate(m.date) === dateString);
    const found = values.find((e) => e.x === dateString);

    if (!found) {
      values.push({ x: dateString, y: occ.length });
    }
  });

  // Email by date validDMARC
  data.messages.map((message, i, arr) => {
    const dateString = parseDate(message.date);
    const occ = arr.filter((m) => (parseDate(m.date) === dateString) && (m.headerData.SPF && m.headerData.DKIM));
    const found = valuesDMARC.find((e) => e.x === dateString);

    if (!found) {
      valuesDMARC.push({ x: dateString, y: occ.length });
    }
  });

  const dataChart = [
    {
      key: 'Emails by date',
      values
    },
    {
      key: 'Emails by date valid DMARC',
      values: valuesDMARC
    }
  ]

  console.log('---->');
  console.log(valuesDMARC);
  return (
    <ChartWrapper>
      <AreaChart data={dataChart} />
    </ChartWrapper>
  );
};

export default Chart;
