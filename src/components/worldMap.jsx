import { useEffect, useRef, useState } from "react";
import WorldMap from "../assets/worldMap.svg";

const InteractiveWorldMap = () => {
  const mapRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.addEventListener("load", function () {
        const svgDoc = mapRef.current.contentDocument || mapRef.current.getSVGDocument();
        if (!svgDoc) {
          console.error("SVG document not found");
          return;
        }

        const paths = svgDoc.querySelectorAll("path");
        if (paths.length === 0) {
          console.error("No path elements found in SVG");
          return;
        }

        paths.forEach((country) => {
          if (!country.id) {
            console.warn("Country path without ID:", country);
            return;
          }

          country.style.fill = "#60a5fa"; // Default color
          country.style.stroke = "transparent"; // Increase clickable area
          country.style.strokeWidth = "2";

          country.addEventListener("mouseenter", (event) => {
            const countryCode = event.target.id.toUpperCase();
            const countryName = getCountryName(countryCode);
            setTooltip({ visible: true, text: countryName, x: event.pageX, y: event.pageY });
            event.target.style.fill = "#f59e0b"; // Highlight color
          });

          country.addEventListener("mousemove", (event) => {
            setTooltip((prev) => ({ ...prev, x: event.pageX, y: event.pageY }));
          });

          country.addEventListener("mouseleave", (event) => {
            setTooltip({ visible: false, text: "", x: 0, y: 0 });
            event.target.style.fill = "#60a5fa"; // Revert to default color
          });

          country.addEventListener("click", (event) => {
            const countryCode = event.target.id.toUpperCase();
            const countryName = getCountryName(countryCode);
            window.location.href = `/disaster/${encodeURIComponent(countryName)}`;
          });
        });
      });
    }
  }, []);

  const getCountryName = (code) => {
    const countries = {
      AF: "Afghanistan",
      AL: "Albania",
      DZ: "Algeria",
      AD: "Andorra",
      AO: "Angola",
      AG: "Antigua and Barbuda",
      AI: "Anguilla", // Added
      AR: "Argentina",
      AM: "Armenia",
      AU: "Australia",
      AT: "Austria",
      AZ: "Azerbaijan",
      BS: "Bahamas",
      BH: "Bahrain",
      BD: "Bangladesh",
      BB: "Barbados",
      BY: "Belarus",
      BE: "Belgium",
      BZ: "Belize",
      BJ: "Benin",
      BT: "Bhutan",
      BO: "Bolivia",
      BA: "Bosnia and Herzegovina",
      BW: "Botswana",
      BR: "Brazil",
      BN: "Brunei",
      BG: "Bulgaria",
      BF: "Burkina Faso",
      BI: "Burundi",
      CV: "Cape Verde",
      KH: "Cambodia",
      CM: "Cameroon",
      CA: "Canada",
      CF: "Central African Republic",
      TD: "Chad",
      CL: "Chile",
      CN: "China",
      CO: "Colombia",
      KM: "Comoros",
      CG: "Republic of Congo",
      CD: "Democratic Republic of the Congo",
      CR: "Costa Rica",
      HR: "Croatia",
      CU: "Cuba",
      CY: "Cyprus",
      CZ: "Czech Republic",
      DK: "Denmark",
      DJ: "Djibouti",
      DM: "Dominica",
      DO: "Dominican Republic",
      EC: "Ecuador",
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea",
      EE: "Estonia",
      SZ: "Eswatini",
      ET: "Ethiopia",
      FJ: "Fiji",
      FI: "Finland",
      FR: "France",
      GA: "Gabon",
      GM: "Gambia",
      GE: "Georgia",
      DE: "Germany",
      GH: "Ghana",
      GR: "Greece",
      GD: "Grenada",
      GT: "Guatemala",
      GN: "Guinea",
      GW: "Guinea-Bissau",
      GY: "Guyana",
      HT: "Haiti",
      HN: "Honduras",
      HU: "Hungary",
      IS: "Iceland",
      IN: "India",
      ID: "Indonesia",
      IR: "Iran",
      IQ: "Iraq",
      IE: "Ireland",
      IL: "Israel",
      IT: "Italy",
      JM: "Jamaica",
      JP: "Japan",
      JO: "Jordan",
      KZ: "Kazakhstan",
      KE: "Kenya",
      KI: "Kiribati",
      KP: "North Korea",
      KR: "South Korea",
      KW: "Kuwait",
      KG: "Kyrgyzstan",
      LA: "Laos",
      LV: "Latvia",
      LB: "Lebanon",
      LS: "Lesotho",
      LR: "Liberia",
      LY: "Libya",
      LI: "Liechtenstein",
      LT: "Lithuania",
      LU: "Luxembourg",
      MG: "Madagascar",
      MW: "Malawi",
      MY: "Malaysia",
      MV: "Maldives",
      ML: "Mali",
      MT: "Malta",
      MH: "Marshall Islands",
      MR: "Mauritania",
      MU: "Mauritius",
      MX: "Mexico",
      FM: "Micronesia",
      MD: "Moldova",
      MC: "Monaco",
      MN: "Mongolia",
      ME: "Montenegro",
      MA: "Morocco",
      MZ: "Mozambique",
      MM: "Myanmar",
      NA: "Namibia",
      NR: "Nauru",
      NP: "Nepal",
      NL: "Netherlands",
      NZ: "New Zealand",
      NI: "Nicaragua",
      NE: "Niger",
      NG: "Nigeria",
      NO: "Norway",
      OM: "Oman",
      PK: "Pakistan",
      PW: "Palau",
      PA: "Panama",
      PG: "Papua New Guinea",
      PY: "Paraguay",
      PE: "Peru",
      PH: "Philippines",
      PL: "Poland",
      PT: "Portugal",
      QA: "Qatar",
      RO: "Romania",
      RU: "Russia",
      RW: "Rwanda",
      KN: "Saint Kitts and Nevis",
      LC: "Saint Lucia",
      VC: "Saint Vincent and the Grenadines",
      WS: "Samoa",
      SM: "San Marino",
      ST: "Sao Tome and Principe",
      SA: "Saudi Arabia",
      SN: "Senegal",
      RS: "Serbia",
      SC: "Seychelles",
      SL: "Sierra Leone",
      SG: "Singapore",
      SK: "Slovakia",
      SI: "Slovenia",
      SB: "Solomon Islands",
      SO: "Somalia",
      ZA: "South Africa",
      SS: "South Sudan",
      ES: "Spain",
      LK: "Sri Lanka",
      SD: "Sudan",
      SR: "Suriname",
      SE: "Sweden",
      CH: "Switzerland",
      SY: "Syria",
      TJ: "Tajikistan",
      TZ: "Tanzania",
      TH: "Thailand",
      TL: "Timor-Leste",
      TG: "Togo",
      TO: "Tonga",
      TT: "Trinidad and Tobago",
      TN: "Tunisia",
      TR: "Turkey",
      TM: "Turkmenistan",
      TV: "Tuvalu",
      UG: "Uganda",
      UA: "Ukraine",
      AE: "United Arab Emirates",
      GB: "United Kingdom",
      US: "United States",
      UY: "Uruguay",
      UZ: "Uzbekistan",
      VU: "Vanuatu",
      VA: "Vatican City",
      VE: "Venezuela",
      VN: "Vietnam",
      WF: "Wallis and Futuna", // Added
      YE: "Yemen",
      YT: "Mayotte", // Added
      ZM: "Zambia",
      ZW: "Zimbabwe",
    };
    return countries[code] || "Unknown Country";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Interactive World Map</h1>
      <div className="relative w-full max-w-6xl h-auto">
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
          data={WorldMap}
          className="w-full drop-shadow-md"
        ></object>
      </div>
    </div>
  );
};

export default InteractiveWorldMap;