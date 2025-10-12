import React, { useState } from "react";

const AdoptionForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check all fields filled
    if (Object.values(formData).some((v) => v.trim() === "")) {
      alert("Please fill all fields!");
      return;
    }
    onSubmit();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl font-bold hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-yellow-600 mb-4 text-center">
          Adoption Form 🐾
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="address"
            placeholder="Home Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="reason"
            placeholder="Why do you want to adopt?"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdoptionForm;
