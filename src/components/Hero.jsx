// import React from 'react';
// import { motion } from 'framer-motion';
// import heroImage from "../assets/hero.jpg"; // Renamed for clarity, ensure your image path is correct

// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-24 md:py-32">
//       {/* Background Gradients/Shapes for visual interest */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

//       <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Section: Text Content */}
//         <motion.div
//           initial={{ x: -100, opacity: 0, scale: 0.95 }}
//           animate={{ x: 0, opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="md:w-1/2 text-center md:text-left"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6 drop-shadow-md">
//             <span className="block text-orange-600">Abeer Enterprises:</span> <br /> Precision in Every Roll
//           </h1>
//           <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
//             For over two decades, Abeer Enterprises has been the trusted name in high-quality tape manufacturing. We engineer durable, high-performance adhesive solutions for every industry.
//           </p>
//           <motion.a
//             href="#contact"
//             className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Discover Our Solutions
//           </motion.a>
//         </motion.div>

//         {/* Right Section: Image */}
//         <motion.div
//           initial={{ x: 100, opacity: 0, scale: 0.95 }}
//           animate={{ x: 0, opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//           className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
//         >
//           <img
//             src={heroImage}
//             alt="High-quality industrial tapes from Abeer Enterprises"
//             className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-none transform transition-transform duration-500 hover:scale-102"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import heroImage from "../assets/hero.jpg"; // Ensure the image path is correct

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-24 md:py-32">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6 drop-shadow-md">
            <span className="block text-orange-600 mt-10">Abeer Enterprises:</span> <br /> Precision in Every Roll
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            For over two decades, Abeer Enterprises has been the trusted name in high-quality tape manufacturing. We engineer durable, high-performance adhesive solutions for every industry.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Solutions
            </motion.a>

            <motion.a
              href="https://wa.me/9306617201?text=Hello%2C%20I%20want%20to%20enquire%20about%20a%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
              Enquire on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <img
            src={heroImage}
            alt="High-quality industrial tapes from Abeer Enterprises"
            className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-none transform transition-transform duration-500 hover:scale-102"
          />
        </motion.div>
      </div>
    </section>
  );
}
