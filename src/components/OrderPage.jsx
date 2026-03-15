import React from 'react';
import { HiArrowLeft, HiSearch } from 'react-icons/hi';
import { MdDeliveryDining, MdRestaurant } from 'react-icons/md';
import { FaStar, FaLeaf } from 'react-icons/fa';
import { TbWind } from "react-icons/tb";

export default function OrderPage({ onBack }) {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden bg-[#FDFBF7] flex flex-col font-sans">
      {/* Top App Bar */}
      <div className="flex items-center justify-between p-4 md:px-8 md:py-4 bg-[#FDFBF7] z-50 shrink-0">
        <button onClick={onBack} className="w-10 h-10 md:w-12 md:h-12 bg-[#f4ece1] rounded-full flex justify-center items-center text-[#ff7b00] hover:bg-[#e8decb] transition-colors">
          <HiArrowLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <img src="/logo.png" alt="Alp Aahar" className="h-10 md:h-12 w-auto rounded-full" />
        <button className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center text-stone-900 hover:bg-stone-100 rounded-full transition-colors">
          <HiSearch size={24} className="md:w-7 md:h-7" />
        </button>
      </div>

      {/* Hero Header Section */}
      <div className="relative bg-[#FF8100] md:rounded-b-[50px] rounded-b-[40px] px-6 pt-6 pb-20 md:pb-16 text-center overflow-hidden shrink-0 mx-0 md:mx-4 shadow-xl">
        {/* Decorative Wind Icons */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white/20 hidden md:block">
            <TbWind size={50} strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 text-white/20 hidden md:block">
            <TbWind size={50} strokeWidth={1} />
        </div>
        
        {/* Fast Delivery Pill */}
        <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 relative z-10 mx-auto">
          <MdDeliveryDining size={18} /> FAST DELIVERY
        </div>
        
        {/* Main Title */}
        <h2 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-3 relative z-10 drop-shadow-md flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          ORDER 
          <span className="bg-white text-[#FF8100] px-4 md:px-5 py-1 rounded-2xl drop-shadow-lg leading-tight">NOW</span>
        </h2>
        
        <p className="text-white text-lg md:text-xl font-hindi font-medium mb-1 md:mb-2 relative z-10 drop-shadow">
          अब घर बैठे स्वाद का आनंद लें
        </p>
        
        <p className="text-white/90 text-sm md:text-base px-4 mb-6 md:mb-8 relative z-10 drop-shadow">
          Pure vegetarian bliss, delivered fresh in <span className="font-bold border-b border-white pb-0.5">20 mins</span>.
        </p>

        {/* Order Via Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 max-w-sm sm:max-w-xl mx-auto">
          <a href="https://www.swiggy.com/city/nagpur/alp-aahar-gandhibagh-rest987014" target="_blank" rel="noreferrer" className="bg-white flex items-center justify-center gap-4 p-4 md:px-6 md:py-3 rounded-2xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl active:scale-95 flex-1 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 text-[#FF8100] rounded-full flex justify-center items-center group-hover:bg-[#FF8100] group-hover:text-white transition-colors">
              <MdRestaurant size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] md:text-[11px] text-stone-500 font-bold uppercase tracking-widest mb-0.5">Order Via</p>
              <h3 className="text-xl md:text-xl font-black text-[#FF8100] tracking-wide">SWIGGY</h3>
            </div>
          </a>

          <a href="https://www.zomato.com/nagpur/alp-aahar-2-gandhibagh/order" target="_blank" rel="noreferrer" className="bg-white flex items-center justify-center gap-4 p-4 md:px-6 md:py-3 rounded-2xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl active:scale-95 flex-1 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-[#E23744] rounded-full flex justify-center items-center group-hover:bg-[#E23744] group-hover:text-white transition-colors">
              <MdDeliveryDining size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] md:text-[11px] text-stone-500 font-bold uppercase tracking-widest mb-0.5">Order Via</p>
              <h3 className="text-xl md:text-xl font-black text-[#E23744] tracking-wide">ZOMATO</h3>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content Area (Overlap) */}
      <div className="flex-1 px-6 relative -mt-10 md:-mt-10 z-20 pb-10 md:pb-4 text-center max-w-4xl mx-auto w-full flex flex-col items-center justify-center md:justify-start">
        
        {/* Bestseller Card */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-5 shadow-2xl mb-8 md:mb-6 text-left border border-stone-100 max-w-sm w-full mx-auto flex items-center gap-5 transform transition hover:scale-105 duration-300">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 shadow-inner">
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=300&auto=format&fit=crop" alt="Thali" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-[#ff7b00] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-1 md:mb-1.5">
              <FaStar size={10} /> Bestseller
            </div>
            <h4 className="font-bold text-stone-900 leading-tight mb-1 md:mb-2 text-base md:text-lg">Chef's <br/> Signature Thali</h4>
            <p className="text-[#ff7b00] font-black text-lg md:text-xl">₹249</p>
          </div>
        </div>
        
        <p className="text-xs md:text-sm text-stone-500 mb-8 md:mb-6 px-4 leading-relaxed max-w-sm mx-auto">
          Authentic flavors from the heart of Gujarat.
        </p>

        {/* Features Row */}
        <div className="flex justify-center items-center gap-6 md:gap-14 max-w-xl mx-auto px-2 mb-10 md:mb-0">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 text-[#ff7b00] rounded-full flex justify-center items-center mb-2 shadow-sm">
              <FaStar size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-stone-500 tracking-widest uppercase">4.8 Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 text-[#ff7b00] rounded-full flex justify-center items-center mb-2 shadow-sm">
              <MdDeliveryDining size={24} className="md:w-7 md:h-7" />
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-stone-500 tracking-widest uppercase">20 Min Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 text-[#ff7b00] rounded-full flex justify-center items-center mb-2 shadow-sm">
              <FaLeaf size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-stone-500 tracking-widest uppercase">100% Veg</span>
          </div>
        </div>
        
        {/* Sticky Fixed Bottom Buttons Mobile ONLY - removed on desktop since they're in header */}
        <div className="flex gap-4 justify-center w-full max-w-sm mx-auto md:hidden mt-auto pt-4">
            <a href="https://www.swiggy.com/city/nagpur/alp-aahar-gandhibagh-rest987014" target="_blank" rel="noreferrer" className="flex-1 bg-[#FD7E14] text-white font-bold py-4 rounded-2xl shadow-lg flex justify-center items-center gap-2 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition">
                <MdRestaurant size={20} /> SWIGGY
            </a>
            <a href="https://www.zomato.com/nagpur/alp-aahar-2-gandhibagh/order" target="_blank" rel="noreferrer" className="flex-1 bg-[#E23744] text-white font-bold py-4 rounded-2xl shadow-lg flex justify-center items-center gap-2 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition">
                <MdDeliveryDining size={20} /> ZOMATO
            </a>
        </div>
      </div>

    </div>
  );
}
