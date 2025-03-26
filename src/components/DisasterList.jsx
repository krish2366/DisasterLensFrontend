import { useEffect, useState } from "react";

const DisasterList = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/disasters");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched disasters in DisasterList:", data);
        setDisasters(data);
        if (data.length === 0 && retryCount < 3) {
          setTimeout(() => setRetryCount(retryCount + 1), 2000);
        }
      } catch (error) {
        console.error("Error fetching disasters in DisasterList:", error);
      } finally {
        if (disasters.length > 0 || retryCount >= 3) {
          setLoading(false);
        }
      }
    };
    fetchDisasters();
  }, [retryCount]);

  if (loading) return <div className="text-center text-xl mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">All Disasters</h2>
      {disasters.length === 0 ? (
        <p className="text-center text-gray-500">No disasters recorded.</p>
      ) : (
        <ul className="space-y-4">
          {disasters.map((disaster, index) => (
            <li key={index} className="p-4 border rounded-lg shadow">
              <p className="text-lg font-semibold">{disaster.category?.toUpperCase() || "UNKNOWN"}</p>
              <p className="text-gray-700">{disaster.text || "No description available"}</p>
              <p className="text-sm text-gray-500">Source: {disaster.source || "Unknown"}</p>
              <p className="text-sm text-gray-500">
                Date: {disaster.timestamp ? new Date(disaster.timestamp).toLocaleString() : "Unknown"}
              </p>
              <p className="text-sm text-gray-500">
                Location: {disaster.location?.state || "Unknown"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisasterList;