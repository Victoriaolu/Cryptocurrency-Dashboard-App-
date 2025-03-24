import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Price History',
                data: data.prices,
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default LineChart;