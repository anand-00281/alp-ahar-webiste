import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/galleries/WhatsApp Image 2026-03-15 at 21.46.27.jpeg';
import img2 from '../assets/galleries/WhatsApp Image 2026-03-15 at 21.46.28 (1).jpeg';
import img3 from '../assets/galleries/WhatsApp Image 2026-03-15 at 21.46.28.jpeg';

export default function Gallery() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      itemsRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section id="gallery" className="py-10 bg-stone-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d4a373]"></span>
              <h2 className="text-[10px] font-bold tracking-widest text-[#d4a373] uppercase">Our Pride</h2>
              <span className="w-10 h-[1px] bg-[#d4a373]"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-hindi font-bold text-stone-900 mb-4">
            A Feast for the Eyes
          </h3>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A glimpse into our kitchen and the vibrant flavors we serve every day.
          </p>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto cursor-pointer">
          
          {/* Main Large Image */}
          <div 
            ref={addToRefs} 
            className="md:col-span-8 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl group relative"
          >
            <img 
                src={img1} 
                alt="Alp Aahar Highlight" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
          </div>

          {/* Side Stacked Images */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div 
              ref={addToRefs} 
              className="h-[200px] md:h-[235px] rounded-3xl overflow-hidden shadow-lg group relative"
            >
              <img 
                  src={img3} 
                  alt="Alp Aahar Delight 1" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>

            <div 
              ref={addToRefs} 
              className="h-[200px] md:h-[241px] rounded-3xl overflow-hidden shadow-lg group relative"
            >
              <img 
                  src={img2} 
                  alt="Alp Aahar Delight 2" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
