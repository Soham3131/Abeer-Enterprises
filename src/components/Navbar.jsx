import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from "../assets/logo1.png";

const links = ['home', 'about', 'products', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Abeer Enterprises Logo"
            className="w-14 h-14 object-cover rounded-full shadow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-900">Abeer Enterprises</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="relative group hover:text-orange-500 transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-3xl text-blue-900">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6 space-y-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-blue-900">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-700">
                  <HiX />
                </button>
              </div>
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
