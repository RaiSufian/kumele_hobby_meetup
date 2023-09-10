import { PieChart, Pie, Cell, Tooltip } from 'recharts';
const ClientChatPie = () => {
    const data = [
        { name: 'dislike', value: 400 },
        { name: 'male', value: 300 },
        { name: 'female', value: 300 },
        { name: 'non-binary', value: 600 },

    ];
    const COLORS = ['#DEB70F', '#C4C4C4', '#CD7F32', '#03a11c'];
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
            <Tooltip />
        </PieChart>
    )
}
export default ClientChatPie;