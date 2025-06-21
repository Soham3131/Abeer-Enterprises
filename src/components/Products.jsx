import React from 'react';
import { motion } from 'framer-motion';
import tape2transparent from '../assets/tape2transparent.jpg';
import tape2printed from '../assets/tape2printed.jpg';
import tape3transparent from '../assets/tape3transparent.jpg';
import tape3printed from '../assets/tape3printed.jpg';

const products = [
  {
    name: '2 Inch Transparent Tape',
    img: tape2transparent,
    desc: 'High-strength BOPP transparent tape, perfect for packaging and sealing with a smooth finish.',
  },
  {
    name: '2 Inch Printed Tape',
    img: tape2printed,
    desc: 'Durable printed tape with customizable branding. Great for identity and security.',
  },
  {
    name: '3 Inch Transparent Tape',
    img: tape3transparent,
    desc: 'Extra-wide clear packaging tape offering strong adhesive grip for heavy-duty sealing.',
  },
  {
    name: '3 Inch Printed Tape',
    img: tape3printed,
    desc: 'Large format printed tape with branding. Ideal for industrial cartons and labeling.',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-14"
        >
          Our Products
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 p-5 flex flex-col text-left"
            >
              <img
                src={product.img}
                alt={product.name}
                className="rounded-lg w-full h-64 object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 text-center">{product.desc}</p>

              <a
                href={`https://wa.me/7988729573?text=Hi%20Abeer%20Enterprises,%20I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto mx-auto bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
