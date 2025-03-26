import { useEffect, useState } from "react";

const LiveUpdates = () => {
  const [disasters, setDisasters] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchDisasters();
    const interval = setInterval(fetchDisasters, 60000); // Auto-refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  const fetchDisasters = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/disasters"); 
      const data = await response.json();
    //   console.log(data[0]);
      setDisasters(data);
    } catch (error) {
      console.error("Error fetching disasters:", error);
    }
  };

  const filteredDisasters = filter === "all" ? disasters : disasters.filter(d => d.type === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Live Disaster Updates</h1>
      <div className="flex justify-center mb-4">
        <select className="p-2 border rounded-md" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="flood">Flood</option>
          <option value="earthquake">Earthquake</option>
          <option value="cyclone">Cyclone</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDisasters.map((disaster, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {console.log(disaster)}
            <h2 className="text-2xl font-semibold text-blue-700">{disaster.category[0].toUpperCase() + disaster.category.slice(1)}</h2>
            <p className="text-gray-700">Location: {disaster.location.state}</p>
            <p className="text-gray-600">Time: {new Date(disaster.timestamp).toLocaleString()}</p>
            <h2 className="text-2xl font-semibold text-blue-700">{disaster.source}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveUpdates;
