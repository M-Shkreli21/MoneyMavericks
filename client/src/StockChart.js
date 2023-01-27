import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function StockChart({ stockChart, stock }) {

    console.log(stockChart);

    // const dataArray = [(stockChart.length !== 0 ? stockChart['Time Series (Daily)'] : null)]

    // const dataArray = (stockChart.length !== 0 ? Object.values(stockChart['Time Series (Daily)']).reverse() : null);

    // const stockData = (stockChart.length !== 0 ? dataArray?.map((price) => {
    //     return ((price['5. adjusted close']))
    // }) : '');

    const data = {
        labels: (stockChart.length !== 0 ? Object.keys(stockChart['Time Series (Daily)']).reverse() : null),
        datasets: [
            {
                label: "Closing Price (Adjusted)",
                data: (stockChart.length !== 0 ? Object.values(stockChart['Time Series (Daily)']).reverse().map((price) => {
                    return ((price['5. adjusted close']))
                }) : null),
                fill: true,
                backgroundColor: "rgba(13, 146, 37, 0.314)",
                borderColor: "rgba(11, 131, 33,0.827)"
            },
        ]
    };

    console.log(data)

    return (
        <div>
            <h3>{stock.toUpperCase()} Daily Chart</h3>
            <Line
                data={data}
            />
        </div>
    )
}

export default StockChart;