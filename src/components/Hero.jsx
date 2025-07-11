// import React, { useEffect, useRef } from 'react';
//  import background from '../assets/a.jpg';

// import gsap from 'gsap';

// const Hero = () => {
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);

//   useEffect(() => {
//     // GSAP Timeline for smooth, expensive animation feel
//     const tl = gsap.timeline({ delay: 1.5 });

//     tl.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
//     ).fromTo(
//       subtitleRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
//       '-=0.6'
//     );
//   }, []);

//   return (
//     <section id='hero' className="relative w-full h-screen overflow-hidden">
//       {/* Background with scale animation */}
//       <div
//         className="absolute inset-0 bg-cover bg-center animate-scaleUp"
//         style={{ backgroundImage: `url(${background})` }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

//       {/* Text Content */}
//       <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
//         <h1
//           ref={titleRef}
//           className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide"
//         >
//           <span >Red Ball</span> Cricket Academy
//         </h1>
//         <p
//           ref={subtitleRef}
//           className="mt-4 text-gray-200 text-xl md:text-2xl tracking-wide"
//         >
//           Where Passion Meets Discipline
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useRef } from 'react';
// Assuming the image you uploaded is named 'image_7daca0.jpg' and is in your assets folder
import background from '../assets/a.jpg';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const overlayRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 }); // Slightly reduced initial delay

    // Background animation: subtle scale in
    tl.fromTo(
      backgroundRef.current,
      { scale: 1.03 }, // Start slightly zoomed in
      { scale: 1, duration: 1.8, ease: 'power2.out' }
    );

    // Overlay animation: subtle fade-in of the tint
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 0.5, duration: 1.5, ease: 'power1.out' }, // Adjust opacity to control tint darkness
      '<' // Starts with the background animation
    );

    // Title animation: retain previous but with a slightly more pronounced subtle effect
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.3, ease: 'back.out(1.2)' }, // 'back.out' for a subtle overshoot
      '-=0.7' // Starts slightly before overlay finishes
    );

    // Subtitle animation: smooth slide up with a gentle fade
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.5' // Starts slightly before title finishes
    );

    // Optional: Add a subtle 'sparkle' or 'wave' effect to text on hover
    // This requires breaking text into characters, which adds complexity.
    // For now, focusing on initial load animations.

  }, []);

  return (
    <section id='hero' className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background with scale animation */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Overlay - adjusted for a balanced tint over the brighter image */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black"
        // Adjust the rgba values to fine-tune the tint.
        // The last value (0.45 here) controls the opacity of the black tint.
        // A lower value makes it brighter, higher makes it darker.
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
      />

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1
          ref={titleRef}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg tracking-wide leading-tight" // Increased text size for impact
        >
          <span className="text-red-400">Red Ball</span> Cricket Academy
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-gray-200 text-xl md:text-2xl lg:text-3xl tracking-wide max-w-2xl" // Increased text size and added max-width
        >
          Where Passion Meets Discipline: Forge Your Future.
        </p>
      </div>
    </section>
  );
};

export default Hero;