import React from "react";

const Sidebar = () => {
  const emergencyContacts = [
    { name: "Police", number: "100" },
    { name: "Ambulance", number: "102" },
    { name: "Fire", number: "101" },
  ];

  return (
    <div className="w-80 h-[100vh] bg-white border border-yellow-300 rounded-2xl shadow-md p-6 m-6 flex flex-col items-center space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-yellow-500 text-center">
        Rescue Map 🗺️
      </h2>

      {/* Live Location */}
      <button className="bg-yellow-400 w-full text-black py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
        Live Location
      </button>

      {/* Search */}
      <form className="w-full flex flex-col space-y-3">
        <input
          type="text"
          className="border border-yellow-400 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter Place Name"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Search
        </button>
      </form>

      {/* Buttons */}
      <div className="w-full flex flex-col space-y-3">
        <button className="bg-yellow-400 w-full text-black py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
          Hospitals
        </button>
        <button className="bg-yellow-400 w-full text-black py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
          Police Stations
        </button>
      </div>

      {/* Emergency Contacts */}
      <div className="w-full mt-4">
        <h3 className="font-bold text-xl text-center mb-2 text-yellow-600">
          Emergency Contacts 🚨
        </h3>
        <ul className="space-y-3">
          {emergencyContacts.map((contact, index) => (
            <li
              key={index}
              className="bg-yellow-50 flex justify-between items-center px-4 py-2 rounded-lg border border-yellow-300"
            >
              <span className="font-semibold text-gray-700">
                {contact.name}: {contact.number}
              </span>
              <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700 transition">
                Call
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
