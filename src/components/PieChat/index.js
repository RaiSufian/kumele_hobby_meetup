import { PieChart, Pie, Cell, Tooltip } from 'recharts';
const PieChat = () => {

    const data = [
        { name: 'A', value: 400 },
        { name: 'B', value: 300 },
        { name: 'C', value: 300 },
    ];

    const COLORS = ['#DEB70F', '#C4C4C4', '#CD7F32'];
    return (
        <PieChart width={320} height={320}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            {/* <Tooltip /> */}
        </PieChart>
    )
}
export default PieChat;