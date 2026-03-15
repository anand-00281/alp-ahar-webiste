import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhyAlpAahar({ onOrderClick }) {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      elementsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const features = [
    {
      id: 1,
      title: 'Authentic Taste',
      description: 'Time-honored recipes passed down through generations, ensuring every bite tells a story of heritage.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff7a00]">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
        </svg>
      ),
      iconBg: 'bg-orange-100',
    },
    {
      id: 2,
      title: 'Fresh Daily',
      description: 'We source directly from local farmers to ensure only the highest quality, farm-to-table ingredients.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff7a00]">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
      ),
      iconBg: 'bg-orange-100',
    },
    {
      id: 3,
      title: 'Fast Service',
      description: "Premium dining doesn't have to wait. Our streamlined kitchen ensures excellence at the speed of life.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff7a00]">
          <path d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" />
        </svg>
      ),
      iconBg: 'bg-orange-100',
    },
  ];

  return (
    <section id="why-alp-aahar" className="py-24 bg-[#FDF9F1] relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div ref={addToRefs} className="flex items-center justify-between mb-12 max-w-4xl mx-auto">
            <button className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#ff7a00] hover:bg-[#ff7a00] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif text-center">Why Alp Aahar</h2>
            <button className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#ff7a00] hover:bg-[#ff7a00] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
            </button>
        </div>

        {/* Content Container (Two columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Image & Quote */}
            <div className="flex flex-col gap-8">
                {/* Hero Card */}
                <div ref={addToRefs} className="relative h-96 lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
          <img
            src="../public/logo.png"
            alt="Fresh Vegetables"
            className="w-full h-full object-cover"
          />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block bg-[#ff7a00] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 shadow-md">
                    OUR ESSENCE
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 drop-shadow-lg font-serif">
                    Crafting Authentic Flavors
                    </h3>
                    <p className="text-stone-200 text-sm md:text-base leading-relaxed drop-shadow-md max-w-md">
                    Rooted in tradition, Alp Aahar brings you the finest vegetarian cuisine with a modern touch.
                    </p>
                </div>
                </div>

                {/* Quote Section (Desktop left column, mobile below list) */}
                <div ref={addToRefs} className="text-center px-6 lg:px-10 py-10 lg:py-12 bg-[#F6EEE1] rounded-[2rem] relative shadow-inner">
                    <div className="text-[#ffb169] text-7xl font-serif absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-60">
                        &rdquo;
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-stone-900 italic font-serif leading-relaxed mb-6">
                    "Alp Aahar isn't just a meal; it's a celebration of nature's bounty and the art of Sattvic cooking."
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <span className="w-12 h-[1px] bg-[#d4a373]/50"></span>
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#ff7a00] uppercase">
                            OUR PHILOSOPHY
                        </span>
                        <span className="w-12 h-[1px] bg-[#d4a373]/50"></span>
                    </div>
                </div>
            </div>

            {/* Right Column - Features & Flow */}
            <div className="flex flex-col h-full justify-center">
                {/* Feature List */}
                <div className="space-y-6 lg:space-y-8 mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              ref={addToRefs}
              className="bg-white rounded-3xl p-6 flex gap-5 items-start shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
                <div className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl ${feature.iconBg} flex items-center justify-center shadow-inner`}>
                    {feature.icon}
                </div>
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-stone-900 mb-2 font-serif">{feature.title}</h4>
                    <p className="text-stone-500 text-sm md:text-base leading-relaxed pr-2 md:pr-4">
                    {feature.description}
                    </p>
                </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div ref={addToRefs} className="mt-auto">
            <button onClick={onOrderClick} className="w-full lg:w-auto px-10 bg-[#ff7a00] hover:bg-[#e66d00] text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-[0.98] text-lg">
            Explore Our Menu
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </button>
        </div>

        </div>
        </div>
      </div>
    </section>
  );
}
