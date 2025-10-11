import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "Facebook", href: "#", icon: <FaFacebookF /> },
    { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-yellow-500 text-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + Contact */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">AniSafe</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Protecting animals, connecting communities, and promoting adoption. <br />
                Join us in making the world a safer place for our furry friends.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white-600" /> contact@anisafe.com
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-white-600" /> +91 12345 67890
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white-600" /> Rajasthan, India
              </div>
            </div>
          </div>
        </div>

        {/* Social Media + Copyright */}
        <div className="py-8 border-t border-white/50 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-white/70 text-sm">Follow us:</span>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-xl flex items-center justify-center transition"
                aria-label={social.name}
              >
                <span className="text-lg text-white">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-white/70 text-sm">
            <span>
              © {currentYear} AniSafe. All rights reserved. Developed with <FaHeart className="inline text-red-500 mx-1" /> by Sneha
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
