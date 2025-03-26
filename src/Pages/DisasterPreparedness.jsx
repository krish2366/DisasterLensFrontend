import { useEffect } from "react";

const DisasterPreparedness = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="text-center py-10 bg-blue-900 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Disaster Preparedness</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-2">
          Be ready before disaster strikes
        </p>
      </div>

      {/* Disaster Types */}
      <div className="flex flex-col p-4 md:px-32 gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col items-center gap-3">
            <h2 className="text-3xl font-bold">Flood</h2>
            <p className="text-lg text-center">
              When the flood roars, chaos takes the land,
              <br />
              When the waters fade, silence grips the sand
            </p>
            <a
              href="#flood"
              className="bg-blue-300 p-4 w-[20rem] text-center rounded-lg hover:bg-blue-400 transition duration-300"
            >
              What Can You Do to Handle the Silence
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="https://media.istockphoto.com/id/1327617934/photo/aerial-view-of-flooded-houses-with-dirty-water-of-dnister-river-in-halych-town-western-ukraine.jpg?s=612x612&w=0&k=20&c=ffFK1c1lx15S3PlX-tee1py2wkLiKYLad67VvFwTG2I="
              alt="Flood Image"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="md:w-[40%] flex flex-col items-center gap-3">
            <h2 className="text-3xl font-bold">Earthquake</h2>
            <p className="text-lg text-center">
              When the earth shakes, fear takes its hold,
              <br />
              When it turns still, the stories unfold.
            </p>
            <a
              href="#earthquake"
              className="bg-blue-300 p-4 w-[22rem] text-center rounded-lg hover:bg-blue-400 transition duration-300"
            >
              What Can You Do When the Earth Trembles
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-[60%] flex justify-center mt-4 md:mt-0">
            <img
              src="https://www.iasexpress.net/wp-content/uploads/2020/03/earthquakes-and-its-management-in-india-upsc-essay-notes-mindmap-1.jpg"
              alt="Earthquake Image"
              className="w-full h-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col items-center gap-3">
            <h2 className="text-3xl font-bold">Cyclone</h2>
            <p className="text-lg text-center">
              When the winds howl, all stands in dread,
              <br />
              When they retreat, ruins whisper the dead.
            </p>
            <a
              href="#cyclone"
              className="bg-blue-300 p-4 w-[20rem] text-center rounded-lg hover:bg-blue-400 transition duration-300"
            >
              What Can You Do to Brave the Storm
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="https://cdn.britannica.com/48/123848-050-92824F8A/Cyclone-Catarina-International-Space-Station-Brazil-March-2004.jpg"
              alt="Cyclone Image"
              className="w-full h-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Actionable Steps */}
      <div id="flood" className="flex flex-col gap-7 bg-white rounded-xl p-10 m-10">
        <h1 className="text-4xl text-center font-bold">🌊 Flood Preparedness and Response Guide</h1>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">Early Warning Signs of a Flood</h3>
            <p className="text-xl mt-3">Floods can occur suddenly, but some warning signs can help you prepare:</p>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Heavy Rainfall lasting for extended periods.</li>
              <li>Rapidly Rising Water Levels in rivers, lakes, or streams.</li>
              <li>Storm Surges and strong winds near coastal areas.</li>
              <li>Unusual Weather Alerts from meteorological agencies.</li>
              <li>Waterlogged Soil causing slow drainage.</li>
              <li>Difficulty in Vehicle Movement due to water accumulation.</li>
              <li>Government Alerts warning of potential flooding.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">Before the Flood: How to Prepare</h3>
            <p className="text-xl mt-3">Preparation can reduce damage and save lives:</p>
            <h4 className="text-2xl font-semibold mt-3">Protect Your Home</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Elevate Electrical Equipment – Move appliances and wiring to higher floors.</li>
              <li>Seal Walls & Gaps – Use waterproof materials to prevent water from seeping in.</li>
              <li>Stock Sandbags – Helps divert water away from your home.</li>
              <li>Keep Emergency Kit Ready – Include food, water, first-aid, flashlight, and batteries.</li>
              <li>Know Evacuation Routes – Plan safe exits in advance.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">Personal Safety Measures</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Store Clean Water – Floods can contaminate supply.</li>
              <li>Prepare Emergency Contacts – Inform family and neighbors.</li>
              <li>Backup Important Documents – Keep digital and physical copies.</li>
              <li>Keep Cash Handy – ATMs and banks may be inaccessible.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">During the Flood: How to Stay Safe</h3>
            <h4 className="text-2xl font-semibold mt-3">If You're Outdoors or in a Vehicle</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Avoid Walking or Driving Through Floodwater – Just 6 inches of moving water can knock you down.</li>
              <li>Seek Higher Ground Immediately – Move to a sturdy shelter.</li>
              <li>Listen to Emergency Alerts – Follow official instructions.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">If You're Indoors</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Turn Off Electricity and Gas – Prevent short circuits or explosions.</li>
              <li>Stay in Upper Floors – Avoid basements and low-lying areas.</li>
              <li>Call for Help If Needed – Use mobile networks or emergency numbers.</li>
              <li>Take Care of Pets – Keep them in safe areas.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">After the Flood: Recovery & Safety Measures</h3>
            <h4 className="text-2xl font-semibold mt-3">Returning Home</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Inspect Your Home Before Entering – Check for structural damage.</li>
              <li>Do Not Turn On Electricity Immediately – Have a professional inspect the system first.</li>
              <li>Wear Protective Gear – Floodwater can contain harmful bacteria.</li>
              <li>Boil Drinking Water – Contaminated water can cause diseases.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">Cleaning & Repairing</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Avoid Contact with Standing Water – It might be electrically charged or contaminated.</li>
              <li>Disinfect Surfaces – Use bleach and cleaning solutions.</li>
              <li>Document Damage for Insurance Claims – Take photos of affected areas.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="earthquake" className="bg-gray-900 p-10 m-10 rounded-lg shadow-lg">
        <h1 className="text-4xl text-white text-center font-bold">🌍 Earthquake Preparedness and Response Guide</h1>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">Early Warning Signs of an Earthquake</h3>
            <p className="text-xl mt-3">Although earthquakes strike suddenly, some precursors may indicate seismic activity:</p>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li><strong>Foreshocks</strong> – Small tremors before the main earthquake.</li>
              <li><strong>Animal Behavior</strong> – Some animals behave erratically before a quake.</li>
              <li><strong>Unusual Ground Vibrations</strong> – You may feel subtle shaking.</li>
              <li><strong>Government Warnings</strong> – Alerts based on detected tremors.</li>
              <li><strong>Deep Rumbles</strong> – A low, distant roaring sound might precede shaking.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">Before the Earthquake: How to Prepare</h3>
            <p className="text-xl mt-3">Taking precautions beforehand can reduce damage and save lives.</p>
            <h4 className="text-2xl font-semibold mt-3">Protect Your Home & Workplace</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Secure heavy items – Bolt down shelves, mirrors, and furniture.</li>
              <li>Reinforce buildings – Ensure earthquake-resistant construction.</li>
              <li>Prepare an emergency kit – Include food, water, and first aid.</li>
              <li>Know safe spots – Identify sturdy places like under tables.</li>
              <li>Plan evacuation routes – Have multiple exit strategies.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">Personal Safety Measures</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Practice earthquake drills – Teach family and coworkers how to respond.</li>
              <li>Store emergency contacts – Keep a list of important numbers.</li>
              <li>Keep shoes & flashlight near your bed – Protect yourself from broken glass.</li>
              <li>Learn first aid & CPR – Injuries are common after quakes.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">During the Earthquake: How to Stay Safe</h3>
            <h4 className="text-2xl font-semibold mt-3">If You're Indoors</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li><strong>Drop, Cover, and Hold On</strong> – Take cover under a sturdy table.</li>
              <li><strong>Stay Away from Windows & Walls</strong> – Glass and debris can shatter.</li>
              <li><strong>Do Not Use Elevators</strong> – They can get stuck.</li>
              <li><strong>Stay Indoors Until Shaking Stops</strong> – Going outside is dangerous.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">If You're Outdoors</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Move away from buildings, trees, and power lines.</li>
              <li>Lie flat in hilly areas – Landslides can occur.</li>
              <li>If driving, stop safely – Avoid stopping under bridges or tunnels.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">After the Earthquake: Recovery & Safety Measures</h3>
            <h4 className="text-2xl font-semibold mt-3">Returning to Buildings</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Inspect for structural damage before entering.</li>
              <li>Check for gas leaks – Evacuate if you smell gas.</li>
              <li>Avoid using tap water until declared safe.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">Cleaning & Repairing</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Stay alert for aftershocks – Additional tremors may follow.</li>
              <li>Disinfect wounds immediately – Prevent infections.</li>
              <li>📸Document property damage – Take photos for insurance claims.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">Health & Safety Precautions</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Wear protective gear – Use gloves and masks when cleaning.</li>
              <li>Seek medical help if injured – Even minor cuts can lead to infections.</li>
              <li>Listen to emergency broadcasts – Stay updated on safety measures.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center md:col-span-2">
            <h3 className="text-3xl font-semibold">Additional Information</h3>
            <h4 className="text-2xl font-semibold mt-3">Earthquake Evacuation Plan</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Establish a family emergency meeting point.</li>
              <li>Prepare an emergency go-bag with essentials.</li>
              <li>Assign roles for each family member during evacuations.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">Common Myths About Earthquakes</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>"Doorways are the safest places" – Only true for old buildings.</li>
              <li>"Earthquakes happen only in certain areas" – They can occur anywhere.</li>
              <li>"You can predict an earthquake" – No reliable prediction system exists yet.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="cyclone" className="space-y-10 p-10 m-10 bg-blue-900 rounded-lg shadow-lg">
        <h1 className="text-4xl text-white text-center font-bold">🌪 Cyclone Preparedness & Safety Guide</h1>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">🌀 Early Warning Signs of a Cyclone</h3>
            <p className="text-xl mt-3">Signs that a cyclone is approaching:</p>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Sudden Drop in Air Pressure – Barometers show a sharp decrease.</li>
              <li>Darkening Skies & Heavy Cloud Cover – Rapid cloud buildup.</li>
              <li>Increase in Wind Speed – Strong, sustained winds pick up.</li>
              <li>Unusually High Ocean Waves – Rising tides in coastal areas.</li>
              <li>Radio & Government Alerts – Official cyclone warnings.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">⏳ Before the Cyclone: How to Prepare</h3>
            <h4 className="text-2xl font-semibold mt-3">🏠 Protect Your Home</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Reinforce Windows & Doors – Use storm shutters or board them up.</li>
              <li>Secure Outdoor Objects – Move loose items indoors.</li>
              <li>Check Roof & Drainage Systems – Ensure proper sealing.</li>
              <li>Stock Sandbags – Prevent water intrusion in flood-prone areas.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">👨‍👩‍👧‍👦 Personal Safety Measures</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Keep an Emergency Kit Ready – Include essentials like food, water, and medicine.</li>
              <li>Store Important Documents Safely – Keep copies in waterproof containers.</li>
              <li>Plan an Evacuation Route – Identify the nearest shelters.</li>
              <li>Charge Devices & Power Banks – Communication may be disrupted.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">🌪 During the Cyclone: How to Stay Safe</h3>
            <h4 className="text-2xl font-semibold mt-3">🏠 If Indoors</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Stay in a Secure Room – Preferably one without windows.</li>
              <li>Turn Off Gas, Electricity, & Water – Prevent hazards.</li>
              <li>Avoid Openings – Stay away from doors, windows, and glass.</li>
              <li>Listen to Weather Updates – Use a battery-powered radio.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">🚗 If Outdoors or in a Vehicle</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Find the Nearest Shelter – Avoid open areas and trees.</li>
              <li>Do Not Drive Through Flooded Roads – Water depth can be deceiving.</li>
              <li>If Caught in Rising Water – Move to higher ground.</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">🏚 After the Cyclone: Recovery & Safety Measures</h3>
            <h4 className="text-2xl font-semibold mt-3">🔍 Inspecting Your Home</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Wait for Official Clearance – Authorities will confirm safety.</li>
              <li>Check for Structural Damage – Avoid unstable buildings.</li>
              <li>Beware of Electrical Hazards – Report fallen power lines.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">💧 Health & Hygiene Precautions</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Boil Water Before Drinking – Prevent contamination.</li>
              <li>Dispose of Spoiled Food – Power outages may cause food to spoil.</li>
              <li>Disinfect Living Areas – Prevent infections from stagnant water.</li>
            </ul>
            <h4 className="text-2xl font-semibold mt-3">🚨 Additional Safety Tips</h4>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Be Prepared for Afterstorms – Secondary storms may follow.</li>
              <li>Help Neighbors & the Elderly – Assist those in need.</li>
              <li>Stay Updated on Relief Measures – Government and NGOs provide aid.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Kit Checklist */}
      <div className="mt-10 text-center pb-10">
        <a
          href="/emergency-kit.pdf"
          download
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Download Emergency Kit Checklist
        </a>
      </div>
    </div>
  );
};

export default DisasterPreparedness;