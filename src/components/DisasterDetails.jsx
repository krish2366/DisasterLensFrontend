import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisasterDetails = () => {
  const { state } = useParams();
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("object")
  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch(`/api/disasters?state=${state}`);
        const data = await response.json();
        setDisasters(data);
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
              <p className="text-lg font-semibold">{disaster.category.toUpperCase()}</p>
              <p className="text-gray-700">{disaster.text}</p>
              <p className="text-sm text-gray-500">Source: {disaster.source}</p>
              <p className="text-sm text-gray-500">Date: {new Date(disaster.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisasterDetails;
