import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import DisasterMap from "./components/DisasterMap2";
import DisasterDetails from "./components/DisasterDetails";
import DisasterPreparedness from "./Pages/DisasterPreparedness";
import InteractiveWorldMap from "./components/worldMap";
import MapSelection from "./components/MapSelection"; 
import Contact from "./Pages/Contact"

const About = () => <div className="p-6 text-center text-xl">About Us</div>;
const ContactUs = () => <div className="p-6 text-center text-xl">Contact Us</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MapSelection />} /> {/* New route for map selection */}
        <Route path="/map" element={<DisasterMap />} /> {/* India Map */}
        <Route path="/world-map" element={<InteractiveWorldMap />} /> {/* World Map */}
        <Route path="/disaster/:state" element={<DisasterDetails />} />
        <Route path="/preparedness" element={<DisasterPreparedness />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;