import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disasters, setDisasters] = useState([]);

  // Fetch disasters for the ticker
  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/disasters");
        const data = await res.json();
        setDisasters(data.slice(0, 10)); // Limit to 10 for the ticker
      } catch (error) {
        console.error("Error fetching disasters for ticker:", error);
      }
    };
    fetchDisasters();
  }, []);

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            DisasterLens
          </Link>

          {/* Menu Button for Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links */}
          <ul
            className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Maps", path: "/maps" }, // Updated to "Maps" leading to map selection
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name} className="p-4 md:p-0">
                <Link to={item.path} className="hover:text-blue-400">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Live Ticker */}
      {disasters.length > 0 && (
        <div className="ticker">
          <div className="ticker-content">
            {/* First set of items */}
            {disasters.map((disaster, index) => (
              <span key={index}>
                {disaster.category.toUpperCase()}: {disaster.text}
              </span>
            ))}
            {/* Duplicate the items to create a seamless loop */}
            {disasters.map((disaster, index) => (
              <span key={`duplicate-${index}`}>
                {disaster.category.toUpperCase()}: {disaster.text}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;