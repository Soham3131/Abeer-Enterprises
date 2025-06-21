import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Place the generated logo here

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Logo & About */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Abeer Enterprises Logo" className="w-[12rem] h-22 mx-auto md:mx-0 mb-4 rounded-full  p-1" />
          <p className="text-gray-400">
            Abeer Enterprises — Trusted Tape Manufacturer from Sonipat, Haryana. Serving industrial and packaging needs with precision.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#products" className="hover:text-orange-500">Products</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" />
            Shiv Colony, Sonipat
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-orange-500" />
            9306617201
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/7988729573?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20tape%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              7988729573
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            {/* You can add LinkedIn or other platforms */}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Abeer Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
