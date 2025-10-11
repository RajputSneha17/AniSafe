import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      name: "Community",
      description: `AniSafe Community connects animal lovers from around the world. 
      Users can join local groups, participate in volunteering, 
      attend events, share stories, and spread awareness about animal welfare. 
      It's a hub to learn, help, and connect with like-minded people.`,
      img: "https://images.unsplash.com/photo-1653184860948-3e215c726452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHw1Nnx8YW5pbWFsJTIwbG92ZXIlMjBjb21tdW5pdHl8ZW58MHx8fHwxNzU5OTIzMDI2fDA&ixlib=rb-4.1.0&q=80&w=400",
      route: "/community",
      buttonText: "Explore Community",
    },
    {
      name: "Adopt",
      description: `AniSafe Adopt allows users to find animals in need of a loving home. 
      Browse profiles of pets available for adoption, see their health status, 
      behavior, and care requirements. Users can contact shelters directly to adopt 
      and help give animals a forever home.`,
      img: "https://images.unsplash.com/photo-1649002944577-9dd11b02d3ef?q=80&w=674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      route: "/adopt",
      buttonText: "Adopt Now",
    },
    {
      name: "Map",
      description: `AniSafe Map helps users locate nearby animal shelters, rescue zones, 
      vet clinics, and feeding stations. This feature ensures that you can find help for 
      animals in distress quickly and efficiently, and also discover places to volunteer.`,
      img: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHw2fHxtYXB8ZW58MHx8fHwxNzU5OTE3MzE5fDA&ixlib=rb-4.1.0&q=80&w=400",
      route: "/map",
      buttonText: "View Map",
    },
    {
      name: "Emergency",
      description: `AniSafe Emergency provides quick access to animal emergency services. 
      Users can report injured or lost animals, call for urgent veterinary help, 
      and get step-by-step guidance on what to do in critical situations. 
      This feature ensures faster response to save animal lives.`,
      img: "https://images.unsplash.com/photo-1661571695229-a4982d7188bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHwxNnx8aW5kaWFuJTIwc3RyZWV0JTIwZG9nfGVufDB8fHx8MTc1OTkyMzY0M3ww&ixlib=rb-4.1.0&q=80&w=400",
      route: "/emergency",
      buttonText: "Get Help",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              variants={itemVariants}
            >
              <motion.img
                src={feature.img}
                alt={feature.name}
                className="w-full md:w-1/2 h-96 rounded-xl shadow-lg object-cover"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 100 }}
              />

              <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <motion.h3
                  className="text-3xl font-semibold text-gray-900"
                  whileHover={{ scale: 1.05, color: "#FACC15" }}
                >
                  {feature.name}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  {feature.description}
                </motion.p>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to={feature.route}
                    className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
                  >
                    {feature.buttonText}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
