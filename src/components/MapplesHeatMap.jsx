import { useEffect } from "react";

const MapplsMap = () => {
  useEffect(() => {
    if (!window.Mappls) {
      console.error("Mappls SDK not loaded. Check API key.");
      return;
    }

    // Initialize the Map
    const map = new window.Mappls.Map("map", {
      center: [28.61, 77.23], // Default location (Delhi)
      zoom: 10,
    });

    // Sample Data for Heatmap
    const dataPoints = [
      { lat: 28.7041, lng: 77.1025 }, // Delhi
      { lat: 28.5355, lng: 77.3910 }, // Noida
      { lat: 28.4595, lng: 77.0266 }, // Gurgaon
    ];

    // Heatmap Configuration
    const heatmapOptions = {
      opacity: 0.8,
      radius: 20,
      maxIntensity: 100,
      fitbounds: true,
    };

    // Add Heatmap Layer
    new window.mappls.HeatmapLayer({
      map,
      data: dataPoints,
      ...heatmapOptions,
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }} />;
};

export default MapplsMap;
