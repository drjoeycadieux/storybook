import { LineChart, Line, XAxis, YAxis } from 'recharts';
import 'tailwindcss/tailwind.css';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const LineChartExample = () => {
    return (
        <div className="flex flex-coljustify-center items-center md:h-screen">
            <div className="w-1/2">
                <LineChart width={500} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default LineChartExample;