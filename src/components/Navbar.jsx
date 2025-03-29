import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disasters, setDisasters] = useState([]);
  const [location, setLocation] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/disasters");
        const data = await res.json();
        setDisasters(data.slice(0, 10)); 
      } catch (error) {
        console.error("Error fetching disasters for ticker:", error);
      }
    };
    fetchDisasters();
    fetchLocation();
  }, []);

  const fetchLocation = async () =>{
    try{
      if((navigator.geolocation)){
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude , longitude)

          const resposnse = await fetch("http://localhost:5000/api/location",{
            method: "POST",
            headers: { 
              "Content-Type": "application/json"
            },
            body: JSON.stringify({latitude, longitude})
          });
          // console.log(resposnse)
          const res = await resposnse.json();
          console.log(res);
          setLocation(res);
          localStorage.setItem("latitude", latitude );
          localStorage.setItem("longitude", longitude );


        });
      }

    }catch(error){
      console.error("Error fetching location:", error);
    }
  }

  const handleClick = () =>{
    navigate('/yourlocation')
  }


  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            DisasterLens
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>


          {location && <button className=" flex justify-center items-center" onClick={handleClick}>
            <MapPin size={20} />
            {location.district},{location.state}
          </button>}



          <ul
            className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Maps", path: "/maps" }, 
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

      {disasters.length > 0 && (
        <div className="ticker">
          <div className="ticker-content">
            {disasters.map((disaster, index) => (
              <span key={index}>
                {disaster.category.toUpperCase()}: {disaster.text}
              </span>
            ))}
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