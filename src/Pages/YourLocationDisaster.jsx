import React from 'react'
import { useParams } from 'react-router-dom'

function YourLocationDisaster() {
    let {disaster} = useParams()
    disaster = disaster.charAt(0).toLowerCase() + disaster.slice(1).toLowerCase()
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
      
  return (
    <div className='mt-10 m-20 bg-gray-200 p-20 pt-10 rounded-lg'>
        <h1 className='text-center font-bold text-3xl'>{disaster} Near You</h1>
        <div>
            {
                Object.entries(data.alerts).map(([key,data])=>{
                    if(data.zone !== "No warning"){
                        {console.log(key,data)}
                        return (
                            <div className='bg-gray-300 m-10 p-10 rounded-lg'>
                                <h1 className='text-center font-semibold text-2xl'>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
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

export default YourLocationDisaster
