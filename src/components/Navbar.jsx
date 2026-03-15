import { useState, useEffect } from 'react';

export default function Navbar({ onOrderClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => { document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative group inline-block bg-transparent border-none appearance-none outline-none cursor-pointer p-0 text-left">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="/logo.png"
            alt="Alp Aahar Logo"
            className={`relative transition-all duration-300 rounded-full shadow-lg border-2 border-white ${
              isScrolled ? 'h-14 w-14' : 'h-20 w-20'
            } object-cover`}
          />
        </button>

        {/* Order Button */}
        <button
          onClick={onOrderClick}
          className="bg-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-[#e66f00] transition-colors shadow-md hover:shadow-lg text-sm md:text-base cursor-pointer"
        >
          Order Now
        </button>
      </div>
    </nav>
  );
}
