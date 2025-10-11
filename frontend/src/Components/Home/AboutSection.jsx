import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/02/20/18/03/dog-2083492_1280.jpg"
            alt="About Animals"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6 relative inline-block">
            Why Our Website is Important
            <span className="block w-24 h-1 bg-yellow-400 rounded-full mt-2 mx-auto md:mx-0"></span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our website is built with one purpose — to make life better for
            animals. Every year, shelters struggle with space and care, and
            countless animals wait for love and a home.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We connect kind-hearted people with shelters and rescue centers,
            making adoption easier and spreading awareness about real animal
            stories through our community.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            By showing how much animals feel, love, and need us, we hope to
            build compassion in everyone’s heart. Our platform stands for care,
            kindness, and real change.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            Together, we can create a world where every animal feels safe,
            loved, and home.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
