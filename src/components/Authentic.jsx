import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Authentic() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
    });

    tl.fromTo(
      imageRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    ).fromTo(
      textContainerRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      '-=0.5'
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="authentic" className="py-3 bg-stone-50 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2" ref={imageRef}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida/AOfcidUzaF1lTvq947bD7Qh7RM0ubX7X3jMB5BvaAVhDcG4dHeuLBhbTcdKTlmARNoka6Gwh3cZUEC_lxl_Y8TMkWx_XCow1Jk4yytsMNHoo7sGKxElnXGRYIrepPfj73Fhn_7MbofHVTkzfyV6q7Gf8DbRBB_YcpRVssPAOZFcyrXoJ-RH5YnyTwI0jaMQO-9wjZf8fKIj8QRKLZ4OtBFsRHvP0JgvuUGvIhT8KDkAhcUZdvaDR_EBSS9RsSyFPsTTqy_JdzvftCt4J"
                alt="Authentic Indian Preparation"
                className="w-full h-auto object-contain bg-stone-200"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl m-4 pointer-events-none" />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2" ref={textContainerRef}>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Our Heritage
            </h2>
            <h3 className="text-4xl md:text-6xl font-hindi font-bold text-stone-900 mb-6 leading-tight">
              हमारा स्वाद, हमारी पहचान
            </h3>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              At Alp Aahar, we believe that the true essence of Bharatiya cuisine lies in its authenticity. 
              Our recipes have been passed down through generations, preserving the pure vegetarian traditions 
              and robust flavors that define our street foods and snacks.
            </p>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Every dish is thoughtfully prepared with the freshest ingredients, carefully sourced spices, 
              and an unwavering commitment to quality. Experience the comfort of home-cooked goodness in every bite.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:ml-0 mx-auto w-fit">
              <div className="flex items-center gap-4 w-44">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary font-black text-lg tracking-tight shadow-sm bg-white">
                  100%
                </div>
                <span className="text-stone-800 font-bold text-lg">Pure Veg</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-stone-300" />
              <div className="flex items-center gap-4 w-44">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary font-black text-2xl shadow-sm bg-white">
                  ✓
                </div>
                <span className="text-stone-800 font-bold text-lg">Fresh Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
