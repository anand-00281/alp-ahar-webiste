export default function Location() {
  return (
    <section id="location" className="py-10 bg-stone-50 md:bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Header (Hidden on Mobile) */}
        <div className="hidden md:block text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-hindi font-bold text-stone-900 mb-4">
            Alp Aahar, Nagpur
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-transparent md:bg-white md:rounded-3xl overflow-hidden md:shadow-lg md:p-4">
          
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="md:hidden mb-2">
            <h3 className="text-2xl font-bold text-stone-900">
              Visit Alp Aahar
            </h3>
          </div>

          {/* Map Area */}
          <div className="w-full lg:w-3/5 h-64 md:h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-sm relative group">
            {/* Custom Map Overlay styling to mimic the static image design */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl z-10 hidden md:block border-4 border-transparent group-hover:border-primary/20 transition-colors"></div>
            
            {/* The fake location pin shown in the screenshot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center drop-shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center shadow-md mb-1">
                <span className="text-white text-2xl">📍</span>
              </div>
              <div className="bg-stone-900 text-primary text-[10px] font-bold tracking-wider px-3 py-1 rounded shadow-lg uppercase">
                Alp Aahar Nagpur
              </div>
            </div>

            <iframe
              title="Alp Aahar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709440615!2d79.0556874!3d21.1666227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7947d2cc76b%3A0x69f32b772264d497!2sAlp-AAhar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, opacity: 0.9 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details Cards Container */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4 justify-center">
            
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-start gap-4">
               <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                 📍
               </div>
               <div>
                  <h4 className="font-bold text-stone-900 text-sm md:text-base">Natraj Tower, Mahal, Nagpur</h4>
                  <p className="text-stone-500 text-xs md:text-sm mt-1 leading-relaxed">
                    Ayachit Mandir Road, <br className="hidden md:block"/>Mahal, Nagpur, <br className="hidden md:block"/>Maharashtra 440032
                  </p>
               </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-start gap-4">
               <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                 🕒
               </div>
               <div>
                  <h4 className="font-bold text-stone-900 text-sm md:text-base">Opening Hours</h4>
                  <p className="text-stone-500 text-xs md:text-sm mt-1">
                    Mon - Sun: 8:00 AM - 10:30 PM
                  </p>
               </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-start gap-4 mb-2">
               <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                 📞
               </div>
               <div>
                  <h4 className="font-bold text-stone-900 text-sm md:text-base">Phone Number</h4>
                  <p className="text-stone-500 text-xs md:text-sm mt-1">
                    +91 98765 43210
                  </p>
               </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://goo.gl/maps/xyz" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#ff7b00] hover:bg-[#e66f00] text-white font-bold py-4 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 text-sm md:text-base active:scale-[0.98]"
            >
               <span>🧭</span> Get Directions
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
