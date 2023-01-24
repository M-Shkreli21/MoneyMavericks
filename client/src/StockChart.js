import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function StockChart({ stockChart, stock }) {

    console.log(stock)

    const dataArray = (stockChart.length !== 0 ? Object.values(stockChart['Time Series (Daily)']).reverse() : null);

    const stockData = dataArray?.map((price) => {
        return ((price['5. adjusted close']))
    })

    const data = {
        labels: (stockChart.length !== 0 ? Object.keys(stockChart['Time Series (Daily)']).reverse() : null),
        datasets: [
            {
                label: "Closing Price (Adjusted)",
                data: (stockChart.length !== 0 ? stockData : null),
                fill: true,
                backgroundColor: "rgba(13, 146, 37, 0.314)",
                borderColor: "rgba(11, 131, 33,0.827)"
            },
        ]
    };

    // const data1 = {
    //     labels: (stockChart.length !== 0 ? Object.keys(stockChart['Time Series (Daily)']) : null),
    //     datasets: [
    //         {
    //             label: "Closing Price (Adjusted)",
    //             data: (stockChart.length !== 0 ? stockData : null),
    //             fill: true,
    //             backgroundColor: "rgba(13, 146, 37, 0.314)",
    //             borderColor: "rgba(11, 131, 33,0.827)"
    //         },
    //     ]
    // };

    return (
        <div>
            <h3>{stock} Chart</h3>
            <Line
                data={data}
            />
        </div>
    )
}

export default StockChart;