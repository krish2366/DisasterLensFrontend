import { useEffect, useState } from "react";

const HazardCheck = () => {
  const [hazardData, setHazardData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let latitude = Number(localStorage.getItem("latitude"));
  let longitude = Number(localStorage.getItem("longitude"));
  
  latitude = Math.ceil(latitude);
  longitude = Math.ceil(longitude);

  console.log(latitude, longitude);

  useEffect(() => {
    fetchHazardData();    
  }, [])

  const disasterTypes = {
    FL : "Flood",
    EQ : "Earthquake",
    CY : "Cyclone",
    DR : "Drought",
    WF : "Wildfire",
    TS : "Tsunami",
    LS :"Landslide",
    AV : "Avalanche",
  }

  const urlData = {
    "Cyclone": "https://ndma.gov.in/sites/default/files/inline-images/cyclone.jpg",
    "Earthquake": "https://ndma.gov.in/sites/default/files/inline-images/earthquake.png",
    "Flood": "https://ndma.gov.in/sites/default/files/inline-images/flood.png",
    "Drought": "https://ndma.gov.in/sites/default/files/inline-images/drought.png",
    "Thunderstorm": "https://ndma.gov.in/sites/default/files/inline-images/thunderstrom.png",
    "Wildfire": "https://ndma.gov.in/sites/default/files/inline-images/wildfire.png",
    "Tsunami": "https://ndma.gov.in/sites/default/files/inline-images/tsunami.png",
    "Landslide": "https://ndma.gov.in/sites/default/files/inline-images/landslide_1.png",
    "Avalanche": "https://ndma.gov.in/sites/default/files/inline-images/avalanch.png",
    "Rainfall": "https://ndma.gov.in/sites/default/files/inline-images/rainfall.jpg"
  }

  const fetchHazardData = async () => {
    if (!latitude || !longitude) {
      setError("Please enter latitude and longitude.");
      return;
    }
    
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/thinkhazard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latitude, longitude }),
      });

      const data = await response.json();
      setHazardData(data);
      console.log(data);
    } catch (err) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Check Hazard Risk</h2>
      

      {loading && <p className="mt-4 text-lg">Fetching data...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {hazardData && (
        <div className="mt-4 text-left bg-gray-100 p-4 rounded flex">
          <div className="w-[40%] p-10 pt-20">
            <h3 className="text-2xl font-bold mb-3">Hazard Location:</h3>
            <p className="text-lg"><span className="text-xl font-semibold "> District:</span> {hazardData?.location?.district}</p> 
            <p className="text-lg"><span className="text-xl font-semibold ">State:</span> {hazardData?.location?.state}</p>
            <p className="text-lg"><span className="text-xl font-semibold ">Country:</span> {hazardData?.location?.country}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4">Hazard Risk:</h3>
            <div className="grid grid-cols-4 gap-4 my-4">
              {hazardData?.thinkHazardReports && Object.entries(hazardData.thinkHazardReports).map(([key, value], index) => (
                <div key={index} className="mt-2 p-5 bg-gray-200 rounded shadow-md flex flex-col justify-center items-center">
                  <img src={urlData[disasterTypes[key]]} alt=""  className='border-2 rounded'/>
                  <p className="text-lg">
                    <span className="text-xl font-semibold ">{disasterTypes[key]}:</span> {(value.riskLevel)} 
                  </p>
                  <p>
                    {value.message !== 'No significant hazard detected' ? value.message : ""} <br />
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HazardCheck;