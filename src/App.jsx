import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import DisasterMap from "./components/DisasterMap2";
import DisasterDetails from "./components/DisasterDetails";
import DisasterPreparedness from "./Pages/DisasterPreparedness";

const Map = () => <div className="p-6 text-center text-xl">Map View</div>;
const About = () => <div className="p-6 text-center text-xl">About Us</div>;
const Contact = () => <div className="p-6 text-center text-xl">Contact Us</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<DisasterMap />} />
        <Route path="/disaster/:state" element={<DisasterDetails />} />
        <Route path="/preparedness" element={<DisasterPreparedness />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
