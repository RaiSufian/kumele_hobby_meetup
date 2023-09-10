import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const MonthlyChart = () => {

    const data = [
        { name: 'Dislike', non_binray: 0, female: 0, male: 0, dislike: 165 },
        { name: 'Male', non_binray: 0, female: 0, male: 80, dislike: 0 },
        { name: 'Female', non_binray: 0, female: 100, male: 0, dislike: 0 },
        { name: 'Non-Binary', non_binray: 45, female: 0, male: 0, dislike: 0 },

    ];



    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />

                <Legend />
                <Bar dataKey="dislike" stackId="stack" fill="#F4C755" className="dislike" > <LabelList dataKey="dislike" position="top" /></Bar>
                <Bar dataKey="male" stackId="stack" fill="#CD7F32" className="male" > <LabelList dataKey="male" position="top" /></Bar>
                <Bar dataKey="female" stackId="stack" fill="#C4C4C4" className="female" > <LabelList dataKey="female" position="top" /> </Bar>
                <Bar dataKey="non_binray" stackId="stack" fill="#03A11C" className="non_binray" ><LabelList dataKey="non_binray" position="top" /> </Bar>

            </BarChart>
        </ResponsiveContainer>
    )
}
export default MonthlyChart;