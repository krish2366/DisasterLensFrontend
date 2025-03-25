import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const categoryColors = {
  earthquake: 'red',
  flood: 'blue',
  cyclone: 'orange',
  heatwave: 'purple',
  unknown: 'gray',
};

const DisasterMap = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    fetch('/api/disasters')
      .then((res) => res.json())
      .then((data) => setDisasters(data))
      .catch((err) => console.error('Error fetching disasters:', err));
  }, []);

  return (
    <div className="h-screen w-full">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {disasters.map((disaster, index) => (
          <Marker
            key={index}
            position={disaster.location.coordinates.reverse()}
            icon={L.divIcon({
              className: `bg-${categoryColors[disaster.category]}-500 w-4 h-4 rounded-full`,
              iconSize: [10, 10],
            })}
          >
            <Popup>
              <strong>{disaster.category.toUpperCase()}</strong>
              <br />
              {disaster.text}
              <br />
              <em>Source: {disaster.source}</em>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DisasterMap;
