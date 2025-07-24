import React from 'react';

const HeroSection = () => {
  return (
      <section className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 pt-2 pb-4 md:py-20 bg-black">
      <div className="absolute right-0 top-0 w-[40%] sm:w-[30%] md:w-[20%] h-full bg-gradient-to-l from-[#122719] [#11292F] to-transparent opacity-70 z-0 pointer-events-none"></div>
      <div className="w-full md:w-[40%] z-10 text-center md:text-left">
        <h1 className="text-[32px] sm:text-[38px] md:text-[43px] leading-[40px] sm:leading-[48px] md:leading-[52px] font-medium font-serif text-white mb-4">
          Unlock the Potential<br className="hidden sm:block" /> of Flutter
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-6 px-2 md:px-0">
          Your Premier Partner for Cross-Platform App Excellence!
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            style={{ backgroundColor: '#08A7CE' }}
            className="text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
          >
            Upgrade Your Tech
          </button>
        </div>
      </div>

      <div className="w-full md:w-[60%] relative mt-12 md:mt-0 flex justify-center items-center z-10">
        <img
          src="/hero1.png"
          alt="Main Code"
          className="rounded-lg w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] max-w-full shadow-xl"
        />
        <img
          src="/hero2.png"
          alt="Floating Code 1"
          className="absolute top-4 sm:top-12 right-[-30px] sm:right-[-50px] w-[180px] sm:w-[240px] md:w-[300px] rounded-md shadow-2xl"
        />
        <img
          src="/hero3.png"
          alt="Floating Code 2"
          className="absolute bottom-[-40px] sm:bottom-[-60px] right-2 sm:right-0 w-[200px] sm:w-[260px] md:w-[320px] rounded-md shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
