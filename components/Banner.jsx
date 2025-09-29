"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = ({ isDarkMode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark that client has mounted
  }, []);

  return (
    <div
      id="banner"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Image */}

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://i.ibb.co/tTwwMJN6/Whats-App-Image-2023-08-13-at-12-26-40-AM.jpg"
          alt="profile"
          className="w-56 h-56 mt-20 object-cover rounded-full shadow-xl border-4 border-white"
        />
      </motion.div>

      {/* Heading */}
      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hi! I'm Md Rakibul Islam Shanto
        <Image src={assets.hand_icon} className="w-6" alt="hand" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-5xl lg:text-[66px] font-bold leading-tight"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        MERN Stack Developer Based in
        <span className="text-indigo-600">Bangladesh</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Crafting seamless, dynamic web experiences using MongoDB, Express,
        React, and Node.js.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <a
          href="#contact"
          className="px-10 py-3 bprder border-white rounded-full bg-black text-white flex items-center gap-2 "
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        {mounted && (
          <a
            href="/resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 "
          >
            My resume
            <Image
              src={assets.download_icon}
              alt=""
              className={`w-4 ${isDarkMode ? "invert" : ""}`}
            />
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default Banner;
