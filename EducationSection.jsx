"use client"

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Higher Secondary Certificate (HSC)",
    school: "Admajee Cantonement College",
    years: "2017–2018",
    description:
      "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
    achievements: [
      { label: "GPA: 4.83", color: "green" },
      { label: "Science", color: "blue" },
    ],
  },
  {
    title: "Bachelor of Science (BSc)",
    school: "Military Institute of Science & Technology (MIST)",
    years: "2019–2023",
    description:
      "Pursuing Bachelor’s degree focusing on interdisciplinary studies and research methodologies in the sciences.",
    achievements: [
      { label: "CGPA: 3.14", color: "green" },
      { label: "PME", color: "blue" },
    ],
  },
];

const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="relative bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-transform duration-500"
    >
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="flex items-center text-2xl font-bold mb-2 text-white">
          <span className="mr-2 text-green-400 text-2xl">🎓</span> {edu.title}
        </h3>
        <p className="mb-1 flex items-center text-gray-300">
          <span className="mr-2">🏫</span> {edu.school}
        </p>
        <p className="mb-4 flex items-center text-gray-400">
          <span className="mr-2">📅</span> {edu.years}
        </p>
        <p className="italic mb-4 text-gray-300">{edu.description}</p>

        <h4 className="flex items-center font-semibold mb-2 text-white">
          <span className="mr-2">🏅</span> Key Achievements
        </h4>
        <div className="flex flex-wrap gap-2">
          {edu.achievements.map((ach, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                ach.color === "green"
                  ? "bg-green-600/20 text-green-400 border border-green-500/30"
                  : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
              }`}
            >
              {ach.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-6 ">
      <h2 className="text-4xl  font-extrabold text-center mb-6 text-gray-800">
        Academic Background
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        A journey through my academic milestones, showcasing the skills, knowledge,
        and discipline that shaped my professional expertise.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {educationData.map((edu, idx) => (
          <EducationCard key={edu.title} edu={edu} index={idx} />
        ))}

        {/* Timeline connector line */}
        <div className="hidden md:block absolute top-16 left-1/2 w-1 bg-indigo-500 h-[calc(100%-4rem)] translate-x-[-50%] rounded-full"></div>
      </div>
    </section>
  );
};

export default EducationSection;
