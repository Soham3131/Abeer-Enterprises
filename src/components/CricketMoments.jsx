// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// // New animated slider component
// import b from '../assets/b1.jpg';
// import c from '../assets/b.jpg';
// import d from '../assets/b2.jpg'; // children playing cricket image
// import e from '../assets/b3.jpg'; // children playing cricket image

// const moments = [
//   {
//     image: b,
//     title: 'Every Legend Starts Somewhere',
//     subtitle: 'Like Kohli, your journey begins with one shot.',
//   },
//   {
//     image: c,
//     title: 'Precision Meets Power',
//     subtitle: 'Train like Bumrah. Dominate like a pro.',
//   },
//   {
//     image: d,
//     title: 'Pure Passion in the Streets',
//     subtitle: 'The game begins where the heart is.',
//   },
//   {
//     image: e,
//     title: 'Glory Comes with Patience',
//     subtitle: 'Like RCB, 18 years of faith, hard work and fire can finally win the trophy.',
//   },
// ];

// const CricketMoments = () => {
//   const cardRefs = useRef([]);
//   const titleRefs = useRef([]);
//   const subtitleRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     cardRefs.current.forEach((card, idx) => {
//       gsap.fromTo(
//         card,
//         { opacity: 0, scale: 0.95 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 85%',
//             onEnter: () => setActiveIndex(idx),
//           },
//         }
//       );

//       gsap.fromTo(
//         titleRefs.current[idx],
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           delay: 0.3,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//           },
//         }
//       );

//       gsap.fromTo(
//         subtitleRefs.current[idx],
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           delay: 0.5,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="py-16 px-4 md:px-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
//       <h2 className="text-4xl font-extrabold text-center mb-10">Cricket Moments</h2>

//       <div className="relative">
//         <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-6 px-2 scrollbar-hide">
//           {moments.map((moment, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (cardRefs.current[idx] = el)}
//               className="relative flex-shrink-0 w-[92vw] md:w-[42rem] h-[28rem] snap-start rounded-xl shadow-2xl overflow-hidden bg-cover bg-center"
//               style={{ backgroundImage: `url(${moment.image})` }}
//             >
//               <div className="absolute inset-0 bg-black/60" />
//               <div className="relative z-10 p-6 text-center w-full h-full flex flex-col justify-center items-center">
//                 <h3
//                   ref={(el) => (titleRefs.current[idx] = el)}
//                   className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-xl"
//                 >
//                   {moment.title}
//                 </h3>
//                 <p
//                   ref={(el) => (subtitleRefs.current[idx] = el)}
//                   className="text-base md:text-lg text-gray-300 max-w-xs drop-shadow"
//                 >
//                   {moment.subtitle}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots */}
//         <div className="mt-6 flex justify-center space-x-3">
//           {moments.map((_, idx) => (
//             <span
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeIndex === idx ? 'bg-orange-500 scale-110' : 'bg-gray-500'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CricketMoments;

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Placeholder images for demonstration.
// In a real application, you would import your images like:
import b from '../assets/b1.jpg';
import c from '../assets/b.jpg';
import d from '../assets/b2.jpg';
import e from '../assets/b3.jpg';

const moments = [
  {
    image: b,
    title: 'Every Legend Starts Somewhere',
    subtitle: 'Like Kohli, your journey begins with one shot.',
  },
  {
    image: c,
     
    title: 'Precision Meets Power',
    subtitle: 'Train like Bumrah. Dominate like a pro.',
  },
  {
    image: d,
    title: 'Pure Passion in the Streets',
    subtitle: 'The game begins where the heart is.',
  },
  {
    image: e,
    title: 'Glory Comes with Patience',
    subtitle: 'Like RCB, 18 years of faith, hard work and fire can finally win the trophy.',
  },
];
const CricketMoments = () => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Effect for automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % moments.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [moments.length]);

  // Effect for animating the current slide and its text
  useEffect(() => {
    // Ensure refs are available before animating
    if (!cardRef.current || !titleRef.current || !subtitleRef.current) {
      return;
    }

    // Kill any ongoing animations on these elements to prevent conflicts
    gsap.killTweensOf(cardRef.current);
    gsap.killTweensOf(titleRef.current);
    gsap.killTweensOf(subtitleRef.current);

    // Animate the card in
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95, y: 20 }, // Start slightly scaled down and below
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Animate title in with a delay
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 0.3, duration: 1, ease: 'power3.out' }
    );

    // Animate subtitle in with a further delay
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: 'power3.out' }
    );
  }, [activeIndex]); // Re-run animations whenever activeIndex changes

  // Handler for dot clicks
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const currentMoment = moments[activeIndex];

  return (
    // <section className="py-16 px-4 md:px-12 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900 font-inter">
 <section className="py-16 px-4 md:px-12 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-900 font-inter">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight leading-tight drop-shadow-lg">
        Iconic Cricket Moments
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Main Card Display */}
        <div
          ref={cardRef}
          className="relative w-full h-[28rem] md:h-[32rem] rounded-xl shadow-2xl overflow-hidden bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url(${currentMoment.image})` }}
        >
          {/* Overlay for text readability - slightly darker to ensure text stands out */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />
          <div className="relative z-10 p-6 text-center w-full h-full flex flex-col justify-center items-center">
            <h3
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-xl leading-tight"
            >
              {currentMoment.title}
            </h3>
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-200 max-w-md drop-shadow px-4"
            >
              {currentMoment.subtitle}
            </p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center space-x-3">
          {moments.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600
                ${activeIndex === idx ? 'bg-orange-600 scale-125 shadow-md' : 'bg-gray-400 hover:bg-gray-500'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CricketMoments;

