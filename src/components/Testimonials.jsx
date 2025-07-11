import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import bgPaper from '../assets/f.jpg'; // You can use any paper-texture image here

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Arjun Mehta',
    title: 'U-19 State Player',
    feedback: 'The coaching here is world-class. Trainers push you to your best version!',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    title: 'Parent of a Student',
    feedback: 'My son’s progress has been outstanding thanks to the academy’s discipline and support.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    title: 'Club Cricketer',
    feedback: 'Facilities are just like what pros use. It’s the best place to grow.',
    rating: 4,
  },
  {
    name: 'Ishika Sharma',
    title: 'Women’s Cricket Trainee',
    feedback: 'The coaches are really attentive and tailor training perfectly to each player’s need.',
    rating: 5,
  },
  {
    name: 'Deepak Raj',
    title: 'Fitness Coach',
    feedback: 'Incredible environment! They balance cricket, fitness, and mindset training so well.',
    rating: 5,
  },
  {
    name: 'Manav Thakur',
    title: 'U-16 Bowler',
    feedback: 'Best bowling drills and video analysis. I improved my swing control tremendously!',
    rating: 4,
  },
];

const Testimonials = () => {
  const cardRefs = useRef([]);
  const titleRef = useRef();

  useEffect(() => {
    // Animate heading with typewriter effect
    gsap.fromTo(
      titleRef.current,
      { width: '0ch' },
      {
        width: '100%',
        duration: 2.5,
        ease: 'steps(25)',
        delay: 0.5,
      }
    );

    // Animate testimonial cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <section id='testimonialss'
      className="py-20 px-6 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgPaper})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="text-center mb-14">
        <h2
          ref={titleRef}
          className="text-[1.70rem] lg:text-[3rem] font-bold text-[#1e3a5f] uppercase tracking-wide whitespace-nowrap overflow-hidden border-r-4 border-orange-500 inline-block"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          What They’re Saying
        </h2>
        <p className="text-gray-800 mt-3 text-lg max-w-2xl mx-auto font-medium">
          Hear from our players, coaches, and parents about their journey with Red Ball Cricket Academy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
          >
            <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
            <p className="text-gray-900 text-base leading-relaxed mb-4 font-medium">"{item.feedback}"</p>
            <div className="flex items-center gap-3">
              <div>
                <h4 className="text-lg font-bold text-[#1e3a5f]">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>
            <div className="flex mt-3">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
              {item.rating < 5 &&
                Array.from({ length: 5 - item.rating }).map((_, i) => (
                  <FaStar key={i + item.rating} className="text-gray-300 mr-1" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
