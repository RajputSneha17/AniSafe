import React from "react";

const Emergency = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-red-700 to-red-900 flex flex-col justify-center items-center text-center text-white px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
        <h1 className="text-4xl font-bold mb-6 uppercase tracking-wide">
          🚨 Emergency Alert
        </h1>

        <p className="text-lg mb-8 max-w-md">
          Sending your <span className="font-semibold">live location</span> and{" "}
          <span className="font-semibold">contact details</span> to all nearby
          rescue centers.
        </p>

        <button className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-red-100 transition-all duration-200">
          Send Alert Now
        </button>

        <p className="text-sm mt-6 text-white/80">
          Make sure your GPS and internet connection are turned on.
        </p>
      </div>
    </div>
  );
};

export default Emergency;
