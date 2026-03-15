export default function OrderCTA({ onOrderClick }) {
  return (
    <div id="order" className="fixed bottom-16 md:bottom-0 left-0 w-full z-40 p-4 md:p-6 md:w-auto md:left-auto md:right-0 flex flex-col items-center md:items-end pointer-events-none transition-transform duration-300">
      <div className="hidden md:block bg-[#EBEBEB] w-full md:w-auto p-4 md:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl border-t border-stone-200 md:border md:border-stone-100 pointer-events-auto rounded-none md:transform md:transition-all md:hover:scale-105 md:duration-300 rounded-t-3xl">
        <p className="text-center font-hindi text-stone-600 font-medium mb-3 text-sm md:text-base">
          अब घर बैठे स्वाद का आनंद लें
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onOrderClick}
            className="flex-1 md:flex-none bg-[#FD7E14] hover:bg-[#e06c00] text-white font-bold py-3 md:px-8 rounded-xl shadow-md transition-colors flex justify-center items-center cursor-pointer"
          >
            Swiggy
          </button>
          <button
            onClick={onOrderClick}
            className="flex-1 md:flex-none bg-[#E23744] hover:bg-[#c42835] text-white font-bold py-3 md:px-8 rounded-xl shadow-md transition-colors flex justify-center items-center cursor-pointer"
          >
            Zomato
          </button>
        </div>
      </div>
    </div>
  );
}
