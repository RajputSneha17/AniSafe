import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Make Your Profile
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Create your AniSafe profile to join our community of animal lovers,
          track your adoptions, volunteer activities, and stay updated on rescue
          missions. Sign up now to get started!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            to="/register"
            className="bg-yellow-400 text-black px-6 py-3 cursor-pointer rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/register"
            className="bg-gray-900 text-white px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-gray-800 transition"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
