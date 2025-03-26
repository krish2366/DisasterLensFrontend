import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisasterDetails = () => {
  const { state } = useParams();
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/disasters");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched disasters:", data); // Debug: Log the fetched data
        // Filter disasters by state
        const filteredDisasters = data.filter((disaster) => {
          const match = disaster.location?.state === state;
          console.log(`Comparing ${disaster.location?.state} with ${state}: ${match}`); // Debug: Log each comparison
          return match;
        });
        setDisasters(filteredDisasters);
      } catch (error) {
        console.error("Error fetching disasters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDisasters();
  }, [state]);

  if (loading) return <div className="text-center text-xl mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Disasters in {state}</h2>
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

export default DisasterDetails;