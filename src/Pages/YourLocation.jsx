import React from 'react'

function YourLocation() {


    const data = {
        "location": {
          "name": "Mumbai",
          "state": "Maharashtra",
          "district": "Mumbai Suburban",
          "coordinates": [72.8777, 19.0760]
        },
        "alerts": {
          "cyclone": {
            "zone": "Watch",
            "details": "Cyclonic storm expected in the next 48 hours."
          },
          "earthquake": {
            "zone": "No warning",
            "details": ""
          },
          "flood": {
            "zone": "Alert",
            "details": "Heavy rainfall expected. Possible waterlogging in low-lying areas."
          },
          "drought": {
            "zone": "No warning",
            "details": ""
          },
          "thunderstorm": {
            "zone": "Warning",
            "details": "Severe thunderstorms with lightning and gusty winds expected."
          },
          "wildfire": {
            "zone": "No warning",
            "details": ""
          },
          "tsunami": {
            "zone": "No warning",
            "details": ""
          },
          "landslide": {
            "zone": "Watch",
            "details": "Possible landslides in hilly regions due to heavy rainfall."
          },
          "avalanche": {
            "zone": "No warning",
            "details": ""
          }
        },
        "updatedAt": "2025-03-29T12:00:00Z"
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
    
    

  return (
    <div className='bg-gray-300 m-20 mt-10 p-20 rounded-xl pt-10'>
        <h1 className='text-3xl font-bold text-center'> Disasters Near You</h1>
        <div className='grid grid-cols-3 gap-10 mt-5'>            
            {
                Object.entries(data.alerts).map(([key,data])=>{
                    if(data.zone !== "No warning"){
                        {console.log(key,data)}
                        return (
                            <div className='p-5 bg-gray-200  rounded-xl flex flex-col items-center gap-3'>
                                <img src={urlData[key.charAt(0).toUpperCase() + key.slice(1)]} alt=""  className='border-2 rounded'/>

                                <h1 className='text-2xl font-semibold'>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
                                <h3>Danger Level: <span className='font-bold'>{data.zone}</span></h3>
                                <p className='text-center'>{data.details}</p>
                            </div>
                        )

                    }

                })
            }         
            
        </div>
    </div>
  )
}

export default YourLocation
