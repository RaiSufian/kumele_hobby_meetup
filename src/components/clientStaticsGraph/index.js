import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ClientStaticsGraph = () => {

    const data = [
        { name: 'Mar', non_binray: 20, female: 19, male: 10, dislike: 13 },
        { name: 'Apr', non_binray: 45, female: 15, male: 25, dislike: 13 },
        { name: 'May', non_binray: 10, female: 35, male: 32, dislike: 13 },
        { name: 'Jun', non_binray: 20, female: 30, male: 10, dislike: 13 },
        { name: 'Jul', non_binray: 40, female: 56, male: 25, dislike: 13 },
        { name: 'Aug', non_binray: 10, female: 35, male: 15, dislike: 13 },
        { name: 'Sep', non_binray: 29, female: 30, male: 10, dislike: 13 },
        { name: 'Oct', non_binray: 47, female: 11, male: 10, dislike: 13 },
    ];
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="non_binray" stackId="stack" fill="#03A11C" />
                <Bar dataKey="female" stackId="stack" fill="#CD7F32" />
                <Bar dataKey="male" stackId="stack" fill="#F4C755" />
                <Bar dataKey="dislike" stackId="stack" fill="#ada997" />
            </BarChart>
        </ResponsiveContainer>
    )
}
export default ClientStaticsGraph;