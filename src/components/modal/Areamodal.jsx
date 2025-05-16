import { useState } from 'react';
import deviceImage from '../../assets/ar1.jpg';
import deviceImage1 from '../../assets/ar2.jpg';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Label,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const devices = [
  {
    id: "ED001",
    lastActive: "2 mins ago",
    image: deviceImage
  },
  {
    id: "ED002",
    lastActive: "5 mins ago",
    image: deviceImage1
  }
];

const alertTrendData = [
  { week: 'Week 1', galamsey: 12, logging: 9 },
  { week: 'Week 2', galamsey: 14, logging: 10 },
  { week: 'Week 3', galamsey: 20, logging: 12 },
  { week: 'Week 4', galamsey: 30, logging: 11 },
  { week: 'Week 5', galamsey: 25, logging: 9 },
  { week: 'Week 6', galamsey: 22, logging: 8 },
  { week: 'Week 7', galamsey: 10, logging: 15 },
  { week: 'Week 8', galamsey: 18, logging: 13 },
  { week: 'Week 9', galamsey: 14, logging: 11 },
  { week: 'Week 10', galamsey: 19, logging: 14 },
  { week: 'Week 11', galamsey: 21, logging: 16 },
  { week: 'Week 12', galamsey: 24, logging: 17 },
  { week: 'Week 13', galamsey: 26, logging: 18 },
];

const pieData = [
  { name: 'Galamsey', value: 60 },
  { name: 'Illegal Logging', value: 30 },
  { name: 'Unknown', value: 10 }
];

const COLORS = ['#ef4444', '#f97316', '#3b82f6'];

const totalAlerts = pieData.reduce((acc, cur) => acc + cur.value, 0);

export default function AreaModal({ area, onClose }) {
  const [alertType, setAlertType] = useState("");
  const [deviceIndex, setDeviceIndex] = useState(0);

  if (!area) return null;

  const currentDevice = devices[deviceIndex];

  const handleNext = () => {
    setDeviceIndex((prev) => (prev + 1) % devices.length);
  };

  const handlePrev = () => {
    setDeviceIndex((prev) => (prev - 1 + devices.length) % devices.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">Zone Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top-Left */}
            <div className="bg-gray-100 p-6 rounded-lg space-y-3">
              <p><strong>Name of Area:</strong> Atewa Zone A</p>
              <p><strong>Location:</strong> Atewa Forest, Eastern Region</p>
              <p><strong>Number of Eagle devices deployed at zone:</strong> 2</p>
              <p><strong>Alerted Eagle device:</strong> ED001</p>
              <p><strong>Number of Alerts in 30 days:</strong> 5</p>
              <p><strong>Predicted Activity:</strong> <span className="text-red-600">Illegal mining</span></p>

              <div className="flex items-center gap-2 mt-4">
                <label htmlFor="alertType" className="font-semibold">
                  <strong>Confirm Alert Type:</strong>
                </label>
                <select
                  id="alertType"
                  value={alertType}
                  onChange={(e) => setAlertType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Illegal Mining">Illegal Mining</option>
                  <option value="Logging">Logging</option>
                  <option value="Other">Other</option>
                  <option value="False Alarm">False Alarm</option>
                </select>
              </div>
            </div>

            {/* Top-Right with Carousel */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
              <h3 className="text-md font-semibold mb-2">Live Feed From: {currentDevice.id}</h3>

              <div className="relative w-full h-48 mb-4">
                <img
                  src={currentDevice.image}
                  alt={`Device ${currentDevice.id}`}
                  className="w-full h-48 object-cover rounded"
                />

                {/* Carousel Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-2 py-1 rounded-l"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-2 py-1 rounded-r"
                >
                  ›
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Picture Taken: {currentDevice.lastActive}
              </p>
              <a href ="camera-panel">
              <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
                View Live Image
              </button>
              </a>
            </div>

            {/* Bottom-Left with Line Chart */}
            <div className="bg-gray-100 p-6 rounded-lg col-span-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Alerts Over Time</h3>
                <p className="text-md font-bold text-black">
                  {alertTrendData.reduce((acc, d) => acc + d.galamsey + d.logging, 0)}{" "}
                  <span className="font-normal text-gray-500 text-sm">total alerts tracked</span>
                </p>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={alertTrendData}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="week">
                      <Label value="Time Period (weeks)" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                      <Label value="Number of Alerts" angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="galamsey" stroke="#ef4444" strokeWidth={2} name="Galamsey" />
                    <Line type="monotone" dataKey="logging" stroke="#f97316" strokeWidth={2} name="Illegal Logging" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ✅ Bottom-Right Pie Chart */}
            <div className="bg-gray-100 p-6 rounded-lg col-span-1 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-1">Alert Type Distribution</h3>
              <p className="text-md font-bold text-black mb-4">
                {totalAlerts} <span className="font-normal text-gray-500 text-sm">Total alerts</span>
              </p>

              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
