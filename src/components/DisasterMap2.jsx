import { useEffect, useRef, useState } from "react";
import IndiaMap from "../assets/indiaMap.svg";

const InteractiveIndiaMap = () => {
  const mapRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.addEventListener("load", function () {
        const svgDoc = mapRef.current.contentDocument || mapRef.current.getSVGDocument();
        if (!svgDoc) return;

        svgDoc.querySelectorAll("path").forEach((state) => {
          state.style.fill = "#60a5fa";

          state.addEventListener("mouseenter", (event) => {
            const stateCode = event.target.id.replace("IN", "").toUpperCase();
            const stateName = getStateName(stateCode);
            setTooltip({ visible: true, text: stateName, x: event.pageX, y: event.pageY });
            event.target.style.fill = "#f59e0b";
          });

          state.addEventListener("mousemove", (event) => {
            setTooltip((prev) => ({ ...prev, x: event.pageX, y: event.pageY }));
          });

          state.addEventListener("mouseleave", (event) => {
            setTooltip({ visible: false, text: "", x: 0, y: 0 });
            event.target.style.fill = "#60a5fa";
          });

          state.addEventListener("click", (event) => {
            const stateCode = event.target.id.replace("IN", "").toUpperCase();
            const stateName = getStateName(stateCode);
            window.location.href = `/disaster/${encodeURIComponent(stateName)}`;
          });
        });
      });
    }
  }, []);

  const getStateName = (code) => {
    const states = {
      AP: "Andhra Pradesh",
      AR: "Arunachal Pradesh",
      AS: "Assam",
      BR: "Bihar",
      CT: "Chhattisgarh",
      GA: "Goa",
      GJ: "Gujarat",
      HR: "Haryana",
      HP: "Himachal Pradesh",
      JH: "Jharkhand",
      KA: "Karnataka",
      KL: "Kerala",
      MP: "Madhya Pradesh",
      MH: "Maharashtra",
      MN: "Manipur",
      ML: "Meghalaya",
      MZ: "Mizoram",
      NL: "Nagaland",
      OD: "Odisha",
      PB: "Punjab",
      RJ: "Rajasthan",
      SK: "Sikkim",
      TN: "Tamil Nadu",
      TG: "Telangana",
      TR: "Tripura",
      UP: "Uttar Pradesh",
      UT: "Uttarakhand",
      WB: "West Bengal",
      AN: "Andaman & Nicobar Islands",
      CH: "Chandigarh",
      DN: "Dadra & Nagar Haveli",
      DD: "Daman & Diu",
      DL: "Delhi",
      JK: "Jammu & Kashmir",
      LA: "Ladakh",
      LD: "Lakshadweep",
      PY: "Puducherry",
    };
    return states[code] || "Odisha";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Interactive India Map</h1>
      <div className="relative w-full max-w-4xl h-auto">
        {tooltip.visible && (
          <div
            className="absolute bg-white text-black text-sm px-3 py-1 border border-gray-300 rounded shadow-md"
            style={{ top: tooltip.y + 10, left: tooltip.x + 10, zIndex: 9999 }}
          >
            {tooltip.text}
          </div>
        )}
        <object
          ref={mapRef}
          type="image/svg+xml"
          data={IndiaMap}
          className="w-full drop-shadow-md"
        ></object>
      </div>
    </div>
  );
};

export default InteractiveIndiaMap;