import { Link } from "react-router-dom";

const MapSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose a Map</h1>
      <div className="flex space-x-6">
        <Link
          to="/world-map"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          World Map
        </Link>
        <Link
          to="/map"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          India Map
        </Link>
      </div>
    </div>
  );
};

export default MapSelection;