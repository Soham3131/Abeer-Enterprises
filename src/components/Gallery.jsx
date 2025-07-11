import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import v1 from '../assets/v1.mp4';
import v2 from '../assets/v2.mp4';
import v3 from '../assets/v3.mp4';
import v4 from '../assets/v4.mp4';
import v5 from '../assets/v5.mp4';
import v6 from '../assets/v6.mp4';
import v7 from '../assets/v7.mp4';
import v8 from '../assets/v8.mp4';

gsap.registerPlugin(ScrollTrigger);

const videos = [v1, v2, v3, v4, v5, v6, v7, v8];

const MediaGallery = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      videoRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoRefs.current[0],
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <section id='media-gallery' className="bg-[#F5F7FA] py-20 px-6 md:px-16">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[#1e3a5f] uppercase tracking-wider">
          Media Gallery
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Glimpses of passion, training, and on-ground action from Red Ball Cricket Academy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, idx) => (
          <div
            key={idx}
            ref={(el) => (videoRefs.current[idx] = el)}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-56 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaGallery;
