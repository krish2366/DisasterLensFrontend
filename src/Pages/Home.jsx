import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newsAPI from "../assets/newsapi.png"
import usgs from "../assets/usgs.png"
import gdacs from "../assets/gdacs.png"
import openmeteo from "../assets/openmeteo.png"

const Home = () => {

  const [disasters, setDisasters] = useState([])


  useEffect(() => {
    const fetchAllDisasters = async () =>{
      const res = await fetch("http://localhost:5000/api/disasters");
      const resData = await res.json();
      console.log(resData.slice(0,6))
      setDisasters(resData.slice(0,6))
    }
  
    fetchAllDisasters();
  }, [])
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Real-Time Disaster Monitoring System</h1>
        <p className="mt-4 text-lg">Stay informed about disasters with real-time updates</p>
        <Link to="/dashboard" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Get Started</Link>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Real-Time Alerts 🔔</h3>
            <p className="text-gray-600 mt-2">Receive instant notifications about ongoing disasters.</p>
            <Link to="/" className="p-3 bg-blue-200 rounded-xl w-32">
                See Disaster
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Multiple Data Sources 📡</h3>
            <p className="text-gray-600 mt-2">Aggregating data from USGS, GDACS, NewsAPI, and Open-Meteo.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img src={usgs} alt="USGS" className="h-8" />
              <img src={gdacs} alt="GDACS" className="h-8" />
              <img src={newsAPI} alt="NewsAPI" className="h-8" />
              <img src={openmeteo} alt="Open-Meteo" className="h-8" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Interactive Map 🗺️</h3>
            <p className="text-gray-600 mt-2">Visualize disasters on an interactive map in real time.</p>
            <Link to="/map" className="p-3 bg-blue-200 rounded-xl w-32">
                See Map
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Disaster Preparedness </h3>
            <p className="text-gray-600 mt-2">Be prepared for the Disaster</p>
            <Link to="/" className="p-3 bg-blue-200 rounded-xl w-32">
                what to do
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Recent Events</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            disasters.length === 0 ? 
            <div> loading...</div> 
            :
            disasters.map((disaster , index)=>{
              return (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold">{disaster.category.charAt(0).toUpperCase() + disaster.category.slice(1)}</h3>
                  <p className="text-gray-600 text-sm">{
                  disaster.text.length > 55 ? 
                    disaster.text.slice(0,55)+ "..." 
                  :
                    disaster.text  
                  } 
                  </p>
                </div>
              )

            })
          }


          
        </div>
      </section>
    </div>
  );
};

export default Home;
