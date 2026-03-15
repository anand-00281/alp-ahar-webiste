import { useState, useEffect } from 'react';
import { HiHome } from 'react-icons/hi';
import { MdRestaurantMenu, MdShoppingBag } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function BottomNav({ onOrderClick }) {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ['hero', 'menu', 'authentic', 'gallery', 'location'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          if (section === 'hero') setActiveTab('home');
          else if (section === 'menu' || section === 'authentic' || section === 'gallery') setActiveTab('menu');
          else if (section === 'location') setActiveTab('location');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: HiHome, href: '#hero' },
    { id: 'menu', label: 'Menu', icon: MdRestaurantMenu, href: '#menu' },
    { id: 'order', label: 'Order', icon: MdShoppingBag, href: '#' },
    { id: 'location', label: 'Location', icon: FaMapMarkerAlt, href: '#location' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#fcf9f5] border-t border-stone-200 z-50 px-6 py-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
           // If making it look like the screenshot, the center item can just be highlighted if active
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'order') {
                  onOrderClick();
                } else {
                  const targetId = item.id === 'home' ? 'hero' : item.id;
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveTab(item.id);
                }
              }}
              className="flex flex-col items-center justify-center p-2 min-w-[64px] bg-transparent border-none appearance-none outline-none cursor-pointer"
            >
              <div
                className={`transition-colors duration-300 ${
                  isActive || item.id === 'order' ? 'text-[#ff7b00]' : 'text-[#7e8f9c]'
                }`}
              >
                <Icon size={item.id === 'order' ? 28 : 24} />
              </div>
              <span
                className={`text-[10px] mt-1 font-medium transition-colors duration-300 ${
                  isActive || item.id === 'order' ? 'text-[#ff7b00]' : 'text-[#7e8f9c]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
