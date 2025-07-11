import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AcademyInfo = () => {
  const numbersRef = useRef([]);
  const barsRef = useRef([]);
  const ourStoryRef = useRef(null);

  useEffect(() => {
    // Number count animation
    numbersRef.current.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      gsap.fromTo(
        el,
        { innerText: 0, opacity: 0, y: 20 },
        {
          innerText: target,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText = `${Math.floor(el.innerText)}+`;
          },
        }
      );
    });

    // Bar animations
    barsRef.current.forEach((bar) => {
      const percent = bar.getAttribute('data-percent');
      gsap.fromTo(
        bar,
        { width: '0%', opacity: 0 },
        {
          width: percent,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });

    // Our Story section fade-in and slide-up
    if (ourStoryRef.current) {
      gsap.fromTo(
        ourStoryRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2, // Stagger animation for children elements
          scrollTrigger: {
            trigger: ourStoryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a182e] to-[#1a3a5e] text-white py-20 px-6 md:px-20 space-y-20 overflow-hidden">
      {/* STATS SECTION */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-10 text-center">
        {[
          { label: 'Selections', count: 400 },
          { label: 'Certified Training Staff', count: 50 },
          { label: 'Years of Experience', count: 10 },
        ].map((item, idx) => (
          <div key={idx} className="flex-1 min-w-0">
            <h2
              className="text-6xl font-extrabold text-orange-400 drop-shadow-lg"
              data-target={item.count}
              ref={(el) => (numbersRef.current[idx] = el)}
            >
              0+
            </h2>
            <p className="text-xl mt-3 font-semibold tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>

      {/* OUR STORY SECTION */}
      <div
        className="flex flex-col lg:flex-row items-start justify-between gap-16"
        ref={ourStoryRef}
      >
        {/* LEFT TEXT */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-8 tracking-tight leading-tight">
            Unveiling Our <span className="text-orange-400">Journey</span>
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
            At <span className='font-bold'>Red Ball Cricket Academy</span> , we're not just shaping cricketers; we're 
            <span className='font-bold'> forging future champions</span>. With over a decade of grassroots coaching
            and a cadre of <span className='font-bold'>elite, certified professionals</span> , our philosophy is
            rooted in discipline, refined skill-building, and an unwavering pursuit
            of cricketing excellence. From foundational basics to advanced,
            strategic training, our academy stands as a sanctuary where passion meets
            purpose, culminating in peak performance.
          </p>
          {/* <button className="mt-4 px-8 py-4 bg-white text-[#0a182e] font-bold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Discover More
          </button> */}
          <a
  href="#contact" // This is the key change!
  className="mt-4 px-8 py-4 bg-white text-[#0a182e] font-bold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 inline-block" // Added inline-block for proper styling as an anchor
>
  Discover More
</a>
        </div>

        {/* RIGHT PROGRESS BARS */}
        <div className="lg:w-1/2 space-y-8 pt-4">
          {[
            ['Coaching Quality', '98%'],
            ['Technology Integration', '95%'],
            ['Player Satisfaction', '98%'],
            ['Nutrition & Fitness Focus', '96%'],
          ].map(([label, percent], idx) => (
            <div key={idx}>
              <div className="flex justify-between items-end mb-2">
                <span className="uppercase text-md font-medium tracking-wide">{label}</span>
                <span className="text-md font-bold text-orange-300">{percent}</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-md"
                  data-percent={percent}
                  ref={(el) => (barsRef.current[idx] = el)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademyInfo;