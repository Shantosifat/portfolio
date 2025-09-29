"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const technologies = [
  { title: "React", icon: "/icons/react.svg" },
  { title: "Node.js", icon: "/icons/node.svg" },
  { title: "MongoDB", icon: "/icons/mongodb.svg" },
  { title: "Express", icon: "/icons/express.svg" },
  { title: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { title: "Stripe", icon: "/icons/stripe.svg" },
];

const Skills = () => {
  return (
    <section className="py-16 bg-white" id="technologies">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 rounded-xl p-6 cursor-pointer 
                         hover:bg-[#fcf4ff] hover:shadow-xl transition-all duration-500
                         flex flex-col items-center justify-center"
            >
              <Image
                src={tech.icon}
                alt={tech.title}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-gray-700 font-semibold">{tech.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
