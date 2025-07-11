import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp
import logo from '../assets/logo.png'; // Academy logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-950 to-black text-gray-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

        {/* Logo & About */}
        <div className="col-span-1 lg:col-span-1">
          <img src={logo} alt="Red Ball Cricket Academy Logo" className="w-24 h-auto mb-5 animate-fade-in-up" />
          <h3 className="text-3xl font-extrabold text-white mb-3 tracking-wide">
            Red Ball <span className="text-orange-500">Cricket</span> Academy
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
            Where **passion** meets **professionalism**. We offer elite training grounds, experienced coaches, and world-class facilities to shape the next generation of cricketing stars.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-10">
          <h4 className="text-white text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#hero" className="hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1 flex items-center before:content-['\203A\0020'] before:text-orange-500 before:font-bold">Home</a></li>
            
            <li><a href="#services" className="hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1 flex items-center before:content-['\203A\0020'] before:text-orange-500 before:font-bold">Services</a></li>
            <li><a href="#media-gallery" className="hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1 flex items-center before:content-['\203A\0020'] before:text-orange-500 before:font-bold">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1 flex items-center before:content-['\203A\0020'] before:text-orange-500 before:font-bold">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1 flex items-center before:content-['\203A\0020'] before:text-orange-500 before:font-bold">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Reach Us</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Email:</p>
                <a href="mailto:redballcricketground@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  redballcricketground@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Phone:</p>
                <a href="tel:+919350076653" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  +91 93500 76653
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaWhatsapp className="text-green-500 text-xl flex-shrink-0 mt-1" /> {/* WhatsApp icon with specific color */}
              <div>
                <p className="font-semibold text-white mb-1">WhatsApp:</p>
                <a 
                  href="https://wa.me/919350076653?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Red%20Ball%20Cricket%20Academy." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Message Us
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Address:</p>
                <address className="not-italic text-gray-300">
                  Sector 22-D, Jhajjar Road, near Village-Maina,
                  <br />
                  Rohtak, Haryana 124001
                </address>
                <a
                  href="https://www.google.com/maps/search/Red+Ball+Cricket+Academy+Sector+22-D,+Jhajjar+Road,+near+Village-Maina,+Rohtak,+Haryana+124001" // Updated Google Maps link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-white transition-colors duration-300 text-sm mt-2 inline-block"
                >
                  View on Map
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter (New Section) */}
        <div className="lg:col-span-1">
          <h4 className="text-white text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Stay Connected</h4>
          <p className="text-gray-400 text-sm mb-4">
            Follow us on social media for the latest updates, news, and insights from the academy!
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="https://www.instagram.com/red_ball_cricket_ground/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-2xl hover:scale-110 transform"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/RBCGRohtak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-2xl hover:scale-110 transform"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            {/* Add more social icons if needed */}
          </div>

          {/* Newsletter Signup (Example) */}
          {/*
          <h4 className="text-white text-xl font-bold mb-4 border-b-2 border-orange-500 pb-2 inline-block">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for exclusive offers and academy news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-lg bg-gray-700 border border-gray-600 text-white w-full focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-600 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          */}
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Red Ball Cricket Academy. All rights reserved. Designed & Developed by Soham Dang.
      </div>
    </footer>
  );
};

export default Footer;