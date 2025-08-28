import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "No DR", value: 40 },
  { name: "Mild", value: 20 },
  { name: "Moderate", value: 20 },
  { name: "Severe", value: 10 },
  { name: "Proliferative", value: 10 },
];

const COLORS = ["#10b981", "#3b82f6", "#facc15", "#f97316", "#ef4444"];

export default function Info() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Diabetic Retinopathy</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Diabetic retinopathy (DR) is a diabetes complication that affects the eyes. It’s caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).
      </p>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-2">Severity Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
