import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    { name: 'mar', value: 61 },
    { name: 'apr', value: 28 },
    { name: 'may', value: 50 },
    { name: 'june', value: 15 },
    { name: 'july', value: 70 },
    { name: 'aug', value: 57 },
    { name: 'sep', value: 29 },
    { name: 'out', value: 20 },

];

const COLORS = ['#38579E', '#82ca9d', '#ffc658', '#ff7300'];

const CustomBarChart = () => {
    const handleBarClick = (data) => {
        console.log('Bar clicked:', data);
        // Add your custom event handling logic here
    };

    return (
        <BarChart width={550} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
                dataKey="value"
                fill={COLORS[0]}
                onClick={handleBarClick} // Attach the click event handler
            />
        </BarChart>
    );
};

export default CustomBarChart;