import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const HistorySection = () => {
  return (
    <section className="px-6 md:px-16 pt-2 pb-4 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative">

        <div>
          <h2 className="text-white text-4xl font-semibold font-serif leading-tight mb-2">
            Flutter's<br />Dawn
          </h2>
          <p className="text-gray-400 text-sm">History of flutter</p>
        </div>

        <div>
          <p className="text-gray-300 text-base leading-relaxed">
            Uncover the fascinating story of Flutter in ‘Flutter’s Dawn: History of Flutter’. 
            From humble origins to global acclaim, delve into its captivating narrative. 
            Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, 
            join us on this captivating journey!{" "}
            <a href="#" className="text-cyan-400 hover:underline">Click to begin!</a>
          </p>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow" />
          <div className="flex md:justify-end">
            <button
              style={{ backgroundColor: '#08A7CE' }}
              className="flex items-center gap-2 text-white font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
            >
              BEGIN <GoArrowUpRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;
