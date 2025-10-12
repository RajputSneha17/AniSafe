import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const members = [
  { name: "Sneha", photo: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "Anita", photo: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Rohit", photo: "https://randomuser.me/api/portraits/men/13.jpg" },
  { name: "Karan", photo: "https://randomuser.me/api/portraits/men/14.jpg" },
  { name: "Priya", photo: "https://randomuser.me/api/portraits/women/15.jpg" },
  { name: "Neha", photo: "https://randomuser.me/api/portraits/women/16.jpg" },
  { name: "Ravi", photo: "https://randomuser.me/api/portraits/men/17.jpg" },
  { name: "Simran", photo: "https://randomuser.me/api/portraits/women/18.jpg" },
  { name: "Vikram", photo: "https://randomuser.me/api/portraits/men/19.jpg" },
  { name: "Aarti", photo: "https://randomuser.me/api/portraits/women/20.jpg" },
  { name: "Riya", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Arjun", photo: "https://randomuser.me/api/portraits/men/22.jpg" },
];

const Member = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerPage = 6;

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => Math.max(prev - membersPerPage, 0));
    } else {
      setCurrentIndex((prev) =>
        Math.min(prev + membersPerPage, members.length - membersPerPage)
      );
    }
  };

  const visibleMembers = members.slice(
    currentIndex,
    currentIndex + membersPerPage
  );

  const notify = () => toast("Sorry, this feature is not implemented yet!");

  return (
    <div className="w-full py-20 bg-gray-50 flex flex-col items-center">
      <ToastContainer />
      <h2 className="text-4xl font-bold mb-16 text-center">
        Our Community Members
      </h2>

      {/* --- Desktop Layout --- */}
      <div className="hidden sm:flex relative w-[80%] items-center justify-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-20 bg-white p-4 rounded-full shadow hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>
        )}

        <div className="flex gap-10 w-[90%] justify-center items-center">
          {/* Add Member Button */}
          <motion.div
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.2 }} onClick={notify}
          >
            <div className="w-28 h-28 rounded-full bg-yellow-400 flex items-center justify-center text-3xl text-white shadow-lg border-4 border-yellow-500">
              <FaPlus />
            </div>
            <span className="mt-3 text-lg font-medium">Add</span>
          </motion.div>
          {visibleMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-lg"
              />
              <span className="mt-3 text-lg font-medium">{member.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        {currentIndex + membersPerPage < members.length && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-20 bg-white p-4 rounded-full shadow hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        )}
      </div>

      {/* --- Mobile Layout --- */}
      <div className="flex sm:hidden w-[90%] mx-auto overflow-x-auto gap-4 py-3 no-scrollbar">
        {/* Add Member Button */}
        <motion.div
          className="flex flex-col items-center flex-shrink-0 min-w-[22%] cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-2xl text-white shadow-lg border-4 border-yellow-500">
            <FaPlus />
          </div>
          <span className="mt-2 text-sm font-medium">Add</span>
        </motion.div>

        {members.map((member, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center flex-shrink-0 min-w-[22%] cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 shadow-lg"
            />
            <span className="mt-2 text-sm font-medium">{member.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Member;
