import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import c from '../assets/c.jpeg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';

const services = [
  {
    title: 'World-Class Stadium Facilities',
    desc: 'Train and play in international-level stadiums, meticulously maintained to provide an elite cricketing environment. Experience conditions designed for champions.',
    image: c,
  },
  {
    title: 'Comprehensive Cricket Academy',
    desc: 'Structured programs integrating tech, analytics, and expert mentors to refine every aspect of your cricket game.',
    image: d,
  },
  {
    title: 'Advanced One-on-One Coaching',
    desc: 'Focused personal sessions to sharpen technique, awareness, and strategic thinking with unmatched precision.',
    image: e,
  },
];

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (idx) => {
    setFlippedIndex(idx);
  };

  const handleFlipBack = () => {
    setFlippedIndex(null);
  };

  return (
    <section className="bg-[#f0f2f5] py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a3a5e] uppercase tracking-wide">
          Explore Our <span className="text-orange-500">Premium Services</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg font-medium">
          Discover offerings designed to elevate your game and build cricketing excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="perspective w-full h-[420px] relative">
            <div className={`card-inner ${flippedIndex === idx ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className="card-front bg-white shadow-xl rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Removed dark overlay */}
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-gray-300 hover:text-orange-600 text-xl font-bold shadow-md drop-shadow-xl">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => handleFlip(idx)}
                    className="bg-orange-500 p-3 rounded-full text-white shadow hover:bg-orange-600 transition"
                  >
                    <FaArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Back Side */}
              <div className="card-back bg-gradient-to-br from-[#1e3a5f] to-[#4a789c] text-white shadow-xl rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">{service.desc}</p>
                <button
                  onClick={handleFlipBack}
                  className="mt-6 px-6 py-2 bg-white text-[#1e3a5f] rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
