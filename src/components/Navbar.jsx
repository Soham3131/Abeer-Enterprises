// import React, { useState } from 'react';
// import logo from '../assets/logo.png';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="absolute top-0 left-0 w-full z-30 text-white px-6 py-4">
//       <div className="flex items-center justify-between max-w-7xl mx-auto">
//         {/* Logo and title */}
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="logo" className="h-[4rem] w-[5rem]" />
//           <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase">
//             Red Ball Cricket Academy
//           </h1>
//         </div>

//         {/* Desktop Button */}
//         <div className="hidden md:block">
//           <button
//             onClick={scrollToContact}
//             className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-lg"
//           >
//             Contact Us
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 bg-black/80 rounded-xl py-4 px-6 text-center shadow-xl">
//           <button
//             onClick={scrollToContact}
//             className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
//           >
//             Contact Us
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Generic scroll function to any section by its ID
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-30 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and title */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('home')} // Assuming your hero section has id="home"
        >
          <img src={logo} alt="Red Ball Cricket Academy Logo" className="h-[4rem] w-[5rem]" />
          <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase">
            Red Ball Cricket Academy
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('media-gallery')} // Added link for Media Gallery
            className="text-white hover:text-orange-400 font-semibold transition duration-300"
          >
            Media Gallery
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-xl py-6 px-6 text-center shadow-2xl animate-fade-in-down">
          <ul className="flex flex-col space-y-4">
            <li>
              <button
                onClick={() => scrollToSection('home')} // Assuming your hero section has id="home"
                className="text-white text-lg font-medium hover:text-orange-400 transition duration-300 w-full py-2 block"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('media-gallery')}
                className="text-white text-lg font-medium hover:text-orange-400 transition duration-300 w-full py-2 block"
              >
                Media Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg mt-2 w-full"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;