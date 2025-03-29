import React from "react";
import { FaPhoneAlt, FaGlobe, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto my-5 p-8 bg-gray-300 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        📞 Contact Help
      </h1>
      <p className="text-center text-gray-700 mb-10 leading-relaxed">
        DisasterLens provides resources to assist you during emergencies. Below are 
        emergency numbers, contacts for international NGOs, and ways to reach our team.
      </p>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🚨 Universal Emergency Numbers
        </h2>
        <p className="text-gray-600 mb-4">
          In an emergency, call the appropriate number for your region. These numbers connect 
          you to police, fire, or medical services.
        </p>
        <ul className="space-y-2 text-gray-700 pl-4 list-disc">
          <li><strong>North America:</strong> 911</li>
          <li><strong>Europe:</strong> 112</li>
          <li><strong>United Kingdom:</strong> 999</li>
          <li><strong>Australia:</strong> 000</li>
          <li><strong>New Zealand:</strong> 111</li>
          <li><strong>Japan:</strong> 110 (police), 119 (fire/ambulance)</li>
          <li><strong>India:</strong> 112</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          📌 Note: Emergency numbers may vary. Verify local numbers in your area.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🌍 International NGOs for Disaster Response
        </h2>
        <p className="text-gray-600 mb-4">
          These organizations provide humanitarian aid and disaster relief worldwide.
        </p>
        <ul className="space-y-4 text-gray-700">
          {[
            { name: "Red Cross", url: "https://www.icrc.org" },
            { name: "UNHCR", url: "https://www.unhcr.org" },
            { name: "World Food Programme", url: "https://www.wfp.org" },
            { name: "Save the Children", url: "https://www.savethechildren.net" },
            { name: "Help.NGO", url: "https://www.help.ngo" },
          ].map((ngo, index) => (
            <li key={index} className="flex items-center space-x-3">
              <FaGlobe className="text-blue-500 text-lg" />
              <a
                href={ngo.url}
                className="text-blue-600 hover:underline hover:text-blue-800 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ngo.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📩 Contact the DisasterLens Team
        </h2>
        <p className="text-gray-600 mb-4">
          For inquiries about the app, feedback, or technical support, reach out to us.
        </p>
        <div className="flex items-center space-x-3 text-gray-700">
          <FaEnvelope className="text-red-500 text-lg" />
          <span className="text-lg"><strong>Email:</strong> Krish236630@gmail.com</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">⏳ Response Time: Within 48 hours.</p>
      </section>

      <p className="text-center text-gray-500 text-sm mt-6 italic">
        ⚠️ DisasterLens is not an emergency service. Contact local authorities for immediate help.
      </p>
    </div>
  );
};

export default Contact;
