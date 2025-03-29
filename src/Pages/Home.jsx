import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Database, Map, CheckCircle } from "lucide-react";
import newsAPI from "../assets/newsapi.png";
import usgs from "../assets/usgs.png";
import gdacs from "../assets/gdacs.png";
import openmeteo from "../assets/openmeteo.png";

const Home = () => {
  const [disasters, setDisasters] = useState([]);
  const [filteredDisasters, setFilteredDisasters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisaster, setSelectedDisaster] = useState(null);

  useEffect(() => {
    const fetchAllDisasters = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/disasters");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const resData = await res.json();
        console.log("Fetched disasters:", resData);
        setDisasters(resData.slice(0, 6));
        setFilteredDisasters(resData.slice(0, 6));
      } catch (error) {
        console.error("Error fetching disasters:", error);
      }
    };

    fetchAllDisasters();
  }, []);

  

  const showEventDetails = (disaster) => {
    setSelectedDisaster(disaster);
    document.getElementById("eventModal").style.display = "block";
  };

  const closeModal = () => {
    setSelectedDisaster(null);
    document.getElementById("eventModal").style.display = "none";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section
        className={` text-white text-center py-20 bg-cover bg-bottom  bg-hero`}
        style={{
          
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Real-Time Disaster Monitoring System</h1>
        <p className="mt-4 text-lg md:text-xl">Stay informed about disasters with real-time updates</p>
        <a
          href="#events"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </a>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-red-500">
            <Bell className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-semibold">Real-Time Alerts</h3>
            <p className="text-gray-600 mt-2">Receive instant notifications about ongoing disasters.</p>
            <Link to="/hazardcheck" className="p-3 bg-blue-200 rounded-xl w-32 hover:bg-blue-300 transition duration-300">
              See Disaster
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-blue-500">
            <Database className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Multiple Data Sources</h3>
            <p className="text-gray-600 mt-2">Aggregating data from USGS, GDACS, NewsAPI, and Open-Meteo.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img src={usgs} alt="USGS" className="h-8" />
              <img src={gdacs} alt="GDACS" className="h-8" />
              <img src={newsAPI} alt="NewsAPI" className="h-8" />
              <img src={openmeteo} alt="Open-Meteo" className="h-8" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-blue-500">
            <Map className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Interactive Map</h3>
            <p className="text-gray-600 mt-2">Visualize disasters on an interactive map in real time.</p>
            <Link to="/maps" className="p-3 bg-blue-200 rounded-xl w-32 hover:bg-blue-300 transition duration-300">
              See Map
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-green-500">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <h3 className="text-xl font-semibold">Disaster Preparedness</h3>
            <p className="text-gray-600 mt-2">Be prepared for the Disaster</p>
            <Link to="/preparedness" className="p-3 bg-blue-200 rounded-xl w-32 hover:bg-blue-300 transition duration-300">
              What to do
            </Link>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Recent Events</h2>
        
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDisasters.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              {searchQuery
                ? "No matching disasters found."
                : disasters.length === 0
                ? "Failed to load disasters. Please try again later."
                : "Loading..."}
            </div>
          ) : (
            filteredDisasters.map((disaster, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
                onClick={() => showEventDetails(disaster)}
              >
                <h3 className="font-semibold">{disaster.category?.charAt(0).toUpperCase() + disaster.category?.slice(1) || "Unknown"}</h3>
                <p className="text-gray-600 text-sm">
                  {disaster.text?.length > 55 ? disaster.text.slice(0, 55) + "..." : disaster.text || "No description available"}
                </p>
              </div>
            ))
          )}
        </div>
      </section>


      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            Powered by{" "}
            <a href="https://locationiq.com" className="underline hover:text-blue-400">
              LocationIQ
            </a>{" "}
            | Map data ©{" "}
            <a href="https://www.openstreetmap.org" className="underline hover:text-blue-400">
              OpenStreetMap
            </a>{" "}
            contributors | Weather data by{" "}
            <a href="https://open-meteo.com" className="underline hover:text-blue-400">
              Open-Meteo
            </a>
          </p>
          <p className="mt-2">
            <Link to="/contact" className="underline hover:text-blue-400 mr-4">
              Contact Us
            </Link>
            <Link to="/contact" className="underline hover:text-blue-400">
              Give Feedback
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;