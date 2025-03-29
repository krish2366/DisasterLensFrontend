import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import DisasterMap from "./components/DisasterMap2";
import DisasterDetails from "./components/DisasterDetails";
import DisasterPreparedness from "./Pages/DisasterPreparedness";
import InteractiveWorldMap from "./components/worldMap";
import MapSelection from "./components/MapSelection"; 
import Contact from "./Pages/Contact"
import PageNotFound from "./Pages/PageNotFound";
import YourLocation from "./Pages/YourLocation";
import YourLocationDisaster from "./Pages/YourLocationDisaster";
import MapplsMap from "./components/MapplesHeatMap";
import HazardCheck from "./Pages/HazardCheck";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MapSelection />} /> 
        <Route path="/heatmap" element={<MapplsMap />} /> 
        <Route path="/map" element={<DisasterMap />} /> 
        <Route path="/hazardcheck" element={<HazardCheck />} /> 
        <Route path="/world-map" element={<InteractiveWorldMap />} /> 
        <Route path="/disaster/:state" element={<DisasterDetails />} />
        <Route path="/preparedness" element={<DisasterPreparedness />} />
        <Route path="/yourlocation" element={<YourLocation />} />
        <Route path="/yourlocation/:disaster" element={<YourLocationDisaster />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;