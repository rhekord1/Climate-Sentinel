import { useState } from "react";
import cam1 from "../../assets/cam1.jpg";
import cam2 from "../../assets/cam2.jpg";
import cam3 from "../../assets/cam3.jpg";
import cam4 from "../../assets/cam4.jpg";
import cam5 from "../../assets/cam5.jpg";
import cam6 from "../../assets/cam6.jpg";


export default function CameraModule() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const devices = [
    {
      id: "ED001",
      name: "Eagle Device ",
      liveImage: cam1,
      history: [
        { image: cam1, location: "Atewa, Eastern Region", timestamp: "2032-08-12T15:47:00Z" },
        { image: cam2, location: "Atewa, Eastern Region", timestamp: "2032-08-10T10:15:00Z" },
        { image: cam3, location: "Atewa, Eastern Region", timestamp: "2032-08-08T08:30:00Z" }
      ]
    },
    {
      id: "ED002",
      name: "Eagle Device ",
      liveImage: cam4,
      history: [
        { image: cam4, location: "Atewa, Eastern Region", timestamp: "2032-08-12T12:10:00Z" },
        { image: cam5, location: "Atewa, Eastern Region", timestamp: "2032-08-09T09:00:00Z" }
      ]
    },
    {
      id: "ED003",
      name: "Eagle Device",
      liveImage: cam6,
      history: [
        { image: cam6, location: "Atewa, Eastern Region", timestamp: "2032-08-11T16:00:00Z" },
        { image: cam3, location: "Atewa, Eastern Region", timestamp: "2032-08-10T14:40:00Z" }
      ]
    }
  ];

  const filteredDevices = devices.filter((d) =>
    d.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
    setSearchTerm("");
    setRecentlyViewed((prev) => {
      const exists = prev.find((d) => d.id === device.id);
      if (exists) return prev;
      return [device, ...prev].slice(0, 5);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Camera Module</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="bg-gray-50 p-4 rounded-lg h-fit lg:col-span-1">
          {/* Search Input + Dropdown */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Eagle Device..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            {searchTerm && filteredDevices.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-auto">
                {filteredDevices.map((device) => (
                  <li
                    key={device.id}
                    onClick={() => handleSelectDevice(device)}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {device.id} - {device.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Recently Viewed */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Recently Viewed</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {recentlyViewed.map((device) => (
                <li
                  key={device.id}
                  onClick={() => handleSelectDevice(device)}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {device.id}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {selectedDevice ? (
            <>
              {/* Live View */}
              <div className="relative">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {selectedDevice.name} ({selectedDevice.id})
                </h3>

                <div className="relative rounded overflow-hidden">
                  <img
                    src={selectedDevice.liveImage}
                    alt="Live View"
                    className="w-full h-[300px] object-cover rounded"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    LIVE
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Capture Image
                  </button>
                </div>
              </div>

              {/* Image History */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Image History</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {selectedDevice.history.map((entry, i) => (
                    <div key={i} className="bg-gray-50 p-2 rounded-lg shadow-sm">
                      <img
                        src={entry.image}
                        alt={`History ${i}`}
                        className="rounded w-full h-28 object-cover mb-2"
                      />
                      <p className="text-xs text-gray-700">{entry.location}</p>
                      <p className="text-xs text-gray-500">{entry.timestamp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 mt-20">
              Select a device to view live feed and history
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
