import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1816] text-white pt-16 pb-32 md:pb-12 px-6 rounded-t-[40px] mt-[-20px] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo Icon */}
        <div className="w-16 h-16 bg-[#ff7b00] rounded-2xl flex justify-center items-center mb-6 shadow-lg">
          <span className="text-white text-3xl">🍽️</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-[0.2em] mb-1">ALP AAHAR</h2>
        <p className="text-[#ff7b00] font-hindi text-sm mb-6">अल्प - आहार</p>

        {/* Quote */}
        <p className="text-stone-400 text-center text-sm md:text-base italic mb-10 max-w-md leading-relaxed px-4">
          &quot;Celebrating the authentic flavors of vegetarian India since 1995. Experience premium dining at its finest.&quot;
        </p>

        {/* Links */}
        <div className="flex justify-between w-full max-w-sm mb-10 px-4">
          <div className="text-center group cursor-pointer">
            <h4 className="font-bold text-white mb-1 group-hover:text-[#ff7b00] transition-colors">Home</h4>
            <p className="text-stone-500 text-xs font-hindi">घर</p>
          </div>
          <div className="text-center group cursor-pointer">
            <h4 className="font-bold text-white mb-1 group-hover:text-[#ff7b00] transition-colors">Menu</h4>
            <p className="text-stone-500 text-xs font-hindi">मेनू</p>
          </div>
          <div className="text-center group cursor-pointer">
            <h4 className="font-bold text-white mb-1 group-hover:text-[#ff7b00] transition-colors">About</h4>
            <p className="text-stone-500 text-xs font-hindi">हमारे बारे में</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mb-10">
          <a href="https://www.instagram.com/alp_aahar/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-stone-700 flex justify-center items-center text-stone-300 hover:text-white hover:border-[#ff7b00] hover:bg-[#1f1a18] transition-all cursor-pointer">
             <FaInstagram size={20} />
          </a>
          <button onClick={() => {}} className="w-12 h-12 rounded-full border border-stone-700 flex justify-center items-center text-stone-300 hover:text-white hover:border-[#ff7b00] hover:bg-[#1f1a18] transition-all cursor-pointer">
             <FaFacebookF size={20} />
          </button>
        </div>

        <div className="w-full max-w-md h-px bg-stone-800 mb-8"></div>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="border border-[#3d2a1d] bg-[#1a1512] text-[#ff7b00] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2a201a] transition-colors mb-8 flex items-center gap-2"
        >
          Back to Top <span className="text-lg">↑</span>
        </button>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[10px] text-stone-500 tracking-widest uppercase mb-1">
            © {new Date().getFullYear()} Alp Aahar Nagpur. All Rights Reserved.
          </p>
          <p className="text-[10px] text-stone-600 tracking-widest uppercase">
            Crafted with ❤️ in Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}
