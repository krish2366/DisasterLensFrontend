import { Link } from "react-router-dom";

const MapSelection = () => {
  return (
    <div className="flex flex-col  pt-[10rem] min-h-screen bg-earth bg-cover bg-center">
      <div className="bg-gray-400 py-20 px-80 flex flex-col justify-center items-center mx-auto rounded-xl ">
        <h1 className="text-4xl font-bold text-black mb-8">Choose a Map</h1>
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
    </div>
  );
};

export default MapSelection;