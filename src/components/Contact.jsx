import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-white to-blue-50 py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch with Us
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-orange-500 text-xl" />
            <span>Shiv Colony, Gali No. 07, Devru Road, near Nasha Mukti Kendra, Sonipat 131001</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 text-lg" />
              <span>9306617201</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 text-lg" />
              <span>7988729573</span>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://wa.me/7988729573?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20tape%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
