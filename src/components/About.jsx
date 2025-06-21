import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      {/* Background Accent Shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6 drop-shadow-sm">
            Trusted Tape Solutions <span className="text-orange-600">for Over 20 Years</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-xl">
            At <span className="font-semibold">Abeer Enterprises</span>, we craft high-performance adhesive tapes tailored for packaging, sealing, and industrial applications. With a commitment to quality and customer satisfaction, we serve industries that demand precision and durability.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              ISO-compliant tape manufacturing processes
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              Custom printing options for business branding
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              Strong BOPP adhesives for long-lasting performance
            </li>
          </ul>
        </motion.div>

        {/* Right: Optional Graphic or Stats */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-10 md:mt-0 text-center"
        >
          <div className="bg-blue-50 p-6 rounded-3xl shadow-lg max-w-sm mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Why Choose Us?</h3>
            <p className="text-gray-600 mb-4">
              We bring innovation, experience, and commitment to every tape we produce.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
              <div>
                <span className="text-3xl font-bold text-orange-500">20+</span><br />Years Experience
              </div>
              <div>
                <span className="text-3xl font-bold text-orange-500">99%</span><br />Client Satisfaction
              </div>
              <div>
                <span className="text-3xl font-bold text-orange-500">24x7</span><br />Support
              </div>
              <div>
                <span className="text-3xl font-bold text-orange-500">100%</span><br />Custom Solutions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
