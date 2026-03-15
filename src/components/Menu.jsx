import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import menu1 from '../assets/menu/dhokla.jpeg';
import menu2 from '../assets/menu/rawa_dosa.jpeg';
import menu3 from '../assets/menu/samosa.jpeg';
import menu4 from '../assets/menu/idli.jpeg';
import breakfastImg from '../assets/breakfasts.jpeg';
import southIndianImg from '../assets/south_indian.jpeg';

export default function Menu({ onOrderClick }) {
  const popularItems = [
    {
      id: 1,
      name: 'Classic Dhokla',
      price: '₹50',
      image: menu1,
    },
    {
      id: 2,
      name: 'Special Kachori',
      price: '₹85',
      image: menu2,
    },
    {
      id: 3,
      name: 'Samosa Chat',
      price: '₹60',
      image: menu3,
    },
    {
      id: 4,
      name: 'Idli Vada',
      price: '₹70',
      image: menu4,
    },
  ];

  const breakfastSpecials = [
    {
      id: 1,
      name: 'South Indian Specials',
      price: '₹120',
      description: 'Authentic South Indian varieties including perfectly crisp dosas, soft idlis, and crunchy vadas served with our signature chutneys.',
      image: southIndianImg,
      badge: 'BESTSELLER',
      bgColor: 'bg-stone-50',
    },
    {
      id: 2,
      name: 'Traditional Breakfasts',
      price: '₹95',
      description: 'Start your morning with our special Nagpur styled flattened rice (Poha) served with spicy tarri, fresh sev, and a squeeze of lime.',
      image: breakfastImg,
      badge: "CHEF'S SPECIAL",
      bgColor: 'bg-emerald-50',
    },
  ];

  const popularRefs = useRef([]);
  const specialRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.fromTo(
      headerRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      }
    );

    // Popular items stagger animation
    gsap.fromTo(
      popularRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: popularRefs.current[0],
          start: 'top 85%',
        },
      }
    );

    // Breakfast specials stagger animation
    gsap.fromTo(
      specialRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: specialRefs.current[0],
          start: 'top 85%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="menu" className="py-20 bg-[#FDF9F1] relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center space-x-4 mb-4">
              <span className="w-10 h-[1px] bg-[#d4a373]"></span>
              <span className="text-[10px] font-bold tracking-widest text-[#d4a373] uppercase">
                  The Signature Selection
              </span>
              <span className="w-10 h-[1px] bg-[#d4a373]"></span>
          </div>
          
          <div className="mb-2">
            <h2 className="text-4xl md:text-5xl text-stone-900 font-bold mb-2 leading-tight font-hindi">लोकप्रिय व्यंजन</h2>
            <h3 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-stone-400 uppercase">Popular Items</h3>
          </div>
        </div>

        {/* Popular Items - Grid on Desktop, Scroll on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (popularRefs.current[index] = el)}
              className="relative h-[300px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-bold text-2xl leading-tight mb-1 font-serif drop-shadow-md">{item.name}</h4>
                    <p className="text-white text-lg font-semibold drop-shadow-md">{item.price}</p>
                  </div>
              </div>
              <button onClick={onOrderClick} className="absolute bottom-5 right-5 bg-[#ff7a00] hover:bg-[#e66d00] text-white text-[10px] font-bold px-4 py-2 rounded-full transition-colors shadow-lg">
                  ORDER
              </button>
            </div>
          ))}
        </div>

        {/* Breakfast Menu Divider */}
        <div className="flex items-center justify-center space-x-4 pt-6">
            <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Breakfast Menu Specials</span>
            <span className="flex-1 h-[1px] bg-stone-200"></span>
        </div>

        {/* Breakfast specials List - Grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
          {breakfastSpecials.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (specialRefs.current[index] = el)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] transform hover:-translate-y-2 transition-transform duration-300 flex flex-col cursor-pointer group"
            >
              {/* Image Section */}
              <div className={`relative h-64 md:h-72 w-full overflow-hidden ${item.bgColor}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {item.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xl md:text-2xl font-bold text-stone-900 font-serif group-hover:text-primary transition-colors">{item.name}</h4>
                  <span className="text-xl md:text-2xl font-bold text-stone-900">{item.price}</span>
                </div>
                
                <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <button onClick={onOrderClick} className="w-full bg-[#ff7a00] hover:bg-[#e66d00] active:scale-[0.98] text-white text-xs md:text-sm font-bold py-4 rounded-full transition-all tracking-widest shadow-md hover:shadow-xl mt-auto">
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
