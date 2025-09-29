"use client";

import { assets, projects } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // 🔒 Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="mb-15 scroll-mt-16 lg:scroll-mt-24">
      {/* Title */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">My Projects</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-5 mb-12 px-4">
          Here are some of the projects I’ve worked on, showcasing my skills in
          building modern, responsive, and user-friendly web applications using
          the MERN stack and other technologies.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-10 lg:px-20 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-90 w-full bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group shadow-md"
            style={{ backgroundImage: `url(${project.image})` }}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            onClick={() => openModal(project)}
          >
            {/* Original Card Overlay - unchanged */}
            <motion.div
              className="bg-white text-black w-11/12 max-w-[90%] rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
              whileHover={{ y: -4 }}
            >
              <div>
                <h2 className="font-semibold text-base sm:text-lg">{project.name}</h2>
                <p className="text-xs sm:text-sm ">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-10 h-10 flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5 h-5" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#1a1a1a] rounded-xl max-w-3xl w-full overflow-y-auto max-h-[90vh] p-6 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-2 text-gray-600 dark:text-gray-300 font-bold text-xl"
                onClick={closeModal}
              >
                ×
              </button>

              {/* Modal Content */}
              <div className="mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full h-64 sm:h-80"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {selectedProject.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mb-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-500 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-500 font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>

              {/* Challenges & Improvements */}
              <div className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <p>
                  <span className="font-semibold">Challenges:</span> {selectedProject.challenges}
                </p>
                <p>
                  <span className="font-semibold">Next Steps:</span> {selectedProject.improvements}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
