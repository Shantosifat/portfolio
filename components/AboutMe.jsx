"use client";

import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutMe = ({ isDarkMode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark that client has mounted
  }, []);
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 scroll-mt-5"
      aria-label="About Me Section"
    >
      {/* Title */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold mb-4 inline-block">
          About Me
          <span className="block w-16 h-1 bg-blue-600 rounded mt-2"></span>
        </h2>
      </motion.div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-12">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co.com/1f1rxwjG/IMG-1059.jpg"
            alt="Md Rakibul Islam Shanto"
            className="w-100 h-100 rounded-3xl object-cover shadow-lg"
          />
        </motion.div>

        {/* Text & Info */}
        <motion.div
          className="max-w-2xl flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-10">
            I’m a passionate MERN stack developer skilled in building modern,
            responsive, and scalable web applications. With expertise in
            MongoDB, Express, React, and Node.js, I enjoy turning ideas into
            functional solutions while focusing on clean code, performance, and
            user experience.
          </p>

          {/* Info Cards */}
          {mounted && (
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {infoList.map(({ icon, title, description }, index) => (
                <motion.li
                  key={index}
                  className={`rounded-xl p-6 cursor-pointer duration-500 border ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-800 hover:bg-gray-700 hover:shadow-gray-900/50 text-gray-200"
                      : "border-gray-400 bg-white hover:bg-[#fcf4ff] hover:shadow-black/40 text-gray-700"
                  } hover:-translate-y-1 hover:shadow-lg`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon — switch color if needed */}
                  <Image
                    src={icon}
                    alt={title}
                    className={`w-7 mt-3 ${isDarkMode ? "invert" : ""}`}
                  />

                  {/* Title */}
                  <h3
                    className={`my-4 font-semibold ${
                      isDarkMode ? "text-gray-100" : "text-gray-700"
                    }`}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Tools */}
          {mounted && (
            <>
              <h4
                className={`my-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Tools I use :
              </h4>

              <motion.ul
                className="flex items-center gap-3 sm:gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {toolsData.map((tool, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cursor-pointer duration-500 border ${
                      isDarkMode
                        ? "border-gray-700 bg-gray-800 hover:bg-gray-700 hover:shadow-gray-900/50"
                        : "border-gray-400 bg-white hover:bg-gray-100 hover:shadow-black/20"
                    } hover:-translate-y-1 hover:shadow-lg`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={tool} alt="tool" className={`w-5 sm:w-7 }`} />
                  </motion.li>
                ))}
              </motion.ul>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
