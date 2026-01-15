"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark that client has mounted
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81fc8d36-48b3-4873-aac6-447bc14e0ab5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowModal(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Only render after client mounts
  if (!mounted) return null;

  return (
    <section
      id="contact"
      className={`w-11/12 max-w-3xl mx-auto py-20 lg:scroll-mt-5 text-center transition-colors duration-500 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center ${
                isDarkMode ? "bg-gray-900 border border-gray-700" : "bg-white"
              }`}
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p
                className={`mb-6 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Thank you! I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4
          className={`text-sm uppercase tracking-wider mb-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Connect with me
        </h4>
        <h2
          className={`text-3xl md:text-4xl font-bold mb-3 ${
            isDarkMode ? "text-gray-100" : "text-gray-600"
          }`}
        >
          Get in touch
        </h2>
        <p
          className={`mt-2 max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-100" : "text-gray-600"
          }`}
        >
          I’d love to hear from you! Whether you have a project in mind,
          collaboration opportunities, or just want to say hi — feel free to
          drop me a message.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        className={`mt-10 rounded-2xl shadow-lg p-8 space-y-6 transition-colors duration-500 ${
          isDarkMode
            ? "bg-[#11001F] backdrop-blur-md text-white border border-gray-700"
            : "bg-white/80 backdrop-blur-md text-gray-900 border border-gray-300"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDarkMode
                ? "border-gray-600 bg-[#11001F] text-white placeholder-gray-400"
                : "border-gray-400 bg-white text-gray-900 placeholder-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDarkMode
                ? "border-gray-600 bg-[#11001F] text-white placeholder-gray-400"
                : "border-gray-400 bg-white text-gray-900 placeholder-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Message */}
        <motion.textarea
          rows="5"
          name="message"
          placeholder="Enter your message"
          required
          className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            isDarkMode
              ? "border-gray-600 bg-[#11001F] text-white placeholder-gray-400"
              : "border-gray-400 bg-white text-gray-900 placeholder-gray-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: isDarkMode ? "#1F2937" : "rgba(0,0,0,0.8)",
            color: "white",
          }}
        >
          Submit now <ArrowRight size={18} />
        </motion.button>

        <motion.p
          className={`mt-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: result ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      </motion.form>
    </section>
  );
};

export default Contact;

// "use client";

// import React, { useEffect, useState } from "react";
// import { ArrowRight, CheckCircle2, X } from "lucide-react"; // Added icons
// import { motion, AnimatePresence } from "framer-motion";

// const Contact = ({ isDarkMode }) => {
//   const [result, setResult] = useState("");
//   const [mounted, setMounted] = useState(false);
//   const [showModal, setShowModal] = useState(false); // New state for popup

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "81fc8d36-48b3-4873-aac6-447bc14e0ab5");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("");
//         setShowModal(true); // Show the success popup
//         event.target.reset();
//       } else {
//         setResult(data.message);
//       }
//     } catch (error) {
//       setResult("Something went wrong. Please try again.");
//     }
//   };

//   if (!mounted) return null;

//   return (
//     <section
//       id="contact"
//       className={`relative w-11/12 max-w-3xl mx-auto py-20 text-center transition-colors duration-500 ${
//         isDarkMode ? "text-white" : "text-gray-900"
//       }`}
//     >
//       {/* Success Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className={`p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center ${
//                 isDarkMode ? "bg-gray-900 border border-gray-700" : "bg-white"
//               }`}
//             >
//               <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
//               <p className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 Thank you! I'll get back to you as soon as possible.
//               </p>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         <h4 className={`text-sm uppercase tracking-wider mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
//           Connect with me
//         </h4>
//         <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in touch</h2>
//       </motion.div>

//       <motion.form
//         onSubmit={onSubmit}
//         className={`mt-10 rounded-2xl shadow-lg p-8 space-y-6 transition-colors duration-500 ${
//           isDarkMode
//             ? "bg-[#11001F] border border-gray-700"
//             : "bg-white/80 border border-gray-300"
//         }`}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="Name"
//             required
//             name="name"
//             className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none ${
//               isDarkMode ? "bg-transparent border-gray-600" : "bg-white border-gray-300"
//             }`}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             name="email"
//             className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none ${
//               isDarkMode ? "bg-transparent border-gray-600" : "bg-white border-gray-300"
//             }`}
//           />
//         </div>

//         <textarea
//           rows="5"
//           name="message"
//           placeholder="Message"
//           required
//           className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none ${
//             isDarkMode ? "bg-transparent border-gray-600" : "bg-white border-gray-300"
//           }`}
//         ></textarea>

//         <motion.button
//           type="submit"
//           disabled={result === "Sending...."}
//           className={`py-3 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto transition-all duration-500 ${
//             result === "Sending...." ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           style={{
//             backgroundColor: isDarkMode ? "#374151" : "#111827",
//             color: "white",
//           }}
//         >
//           {result === "Sending...." ? "Sending..." : "Submit now"} <ArrowRight size={18} />
//         </motion.button>

//         {/* Error message only shows if there's a problem */}
//         {result && result !== "Sending...." && (
//           <p className="text-red-500 mt-2">{result}</p>
//         )}
//       </motion.form>
//     </section>
//   );
// };

// export default Contact;
