import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroVideo from '../assets/landing_page_video.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const logoRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Text stagger reveal
    gsap.fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
    );

    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
        {/* Background Media with Parallax */}
      <div ref={bgRef} className="absolute inset-0 w-full h-[100dvh] md:h-[130%] md:-top-[15%]">
        {/* Desktop Image */}
        <div
          className="w-full h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida/AOfcidXMql6WUF2veYozs0MK2nXNXrA06aCWaeMgEWc9bs6Nb_15i0ALqtG7BbJfKMURwjiCKvxQi-sidl22mzkZAGR3x42HGFreRoXPM5XTOR_aYewdViUo9j9W4xq0-RN6zbAeKV1LC7A_K3ABkI_RnZNA3861UXGL-ZmU9gASqRkEVxtvg0TSLNDst8ai4uUl01UjUOONTw4DFa1o4iY3_dTj-KOS9Tlk31b5bjWQ2_ohjgAbvVxAa6SH_TrlOqopWGxGOZftuYVrag")',
          }}
        />
        {/* Mobile Video */}
        <div className="w-full h-full md:hidden flex items-center justify-center bg-black overflow-hidden relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <div ref={logoRef} className="mb-8 font-hindi text-6xl md:text-8xl text-primary drop-shadow-lg">
          अल्प आहार
        </div>

        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md"
        >
          Authentic Bharatiya Snacks
        </h1>

        <div
          ref={(el) => (textRefs.current[1] = el)}
          className="text-xl md:text-2xl text-stone-200 mb-4 font-medium"
        >
          Nagpur ca trusted breakfast destination
        </div>

        <div
          ref={(el) => (textRefs.current[2] = el)}
          className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base text-stone-300 font-medium tracking-wide"
        >
          <span className="uppercase tracking-widest text-xs font-bold">Fresh</span>
          <span className="text-primary">•</span>
          <span className="uppercase tracking-widest text-xs font-bold">Pure Veg</span>
          <span className="text-primary">•</span>
          <span className="uppercase tracking-widest text-xs font-bold">Authentic Taste</span>
        </div>
      </div>
    </section>
  );
}
