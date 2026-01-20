"use client";

import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/mdrakibul.islamshanto.71",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/md-rakibul-islam-shanto",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/mdtrakibulislamshanto",
    },
  ];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Only render after client mount
  }, []);

  if (!mounted) return null;

  return (
    <footer
      className={`py-10 transition-colors duration-500 ${
        isDarkMode ? "bg-[#11001F] text-gray-300" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Brand / Logo */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
          >
            RIS<span className="text-lime-600">.</span>
          </h2>
          <p
            className={`mt-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-800"}`}
          >
            MERN Stack Developer crafting dynamic & user-friendly web apps.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex lg:ml-9 gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              whileHover={{ scale: 1.2, color: "#84cc16" }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="text-center md:text-left space-y-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Email: <span className="font-medium">shantor200@gmail.com</span>
          </p>
          <p>
            Phone: <span className="font-medium">+8801633012103</span>
          </p>
          <p>
            Location: <span className="font-medium">Dhaka, Bangladesh</span>
          </p>
        </motion.div>
      </div>

      {/* Divider + Copyright */}
      <motion.div
        className={`border-t mt-8 pt-6 text-center text-sm transition-colors duration-500 ${
          isDarkMode
            ? "border-gray-700 text-gray-400"
            : "border-gray-300 text-gray-500"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        © {new Date().getFullYear()} RIS. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
