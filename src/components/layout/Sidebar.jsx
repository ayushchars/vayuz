import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-black p-6 w-64 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:w-[200px] md:block
      `}
    >
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-white text-2xl p-1 rounded-full hover:bg-gray-800 transition"
        >
          <IoCloseSharp />
        </button>
      </div>

      <img src="/logo.png" alt="VAYUZ Logo" className="w-20 mb-8 mx-auto" />

      <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 mb-6 hover:scale-105 transition duration-300">
        <button className="bg-black text-white text-sm px-5 py-2 rounded-full font-semibold">
          CONTACT US
        </button>
      </div>

      <ul className="space-y-4 text-sm font-medium text-white mb-6">
        <li><a href="#" className="hover:text-cyan-400">App Development</a></li>
        <li><a href="#" className="hover:text-cyan-400">Challenges</a></li>
        <li><a href="#" className="hover:text-cyan-400">Hire Developer</a></li>
        <li><a href="#" className="hover:text-cyan-400">Community</a></li>
      </ul>

      <div className="absolute left-8 bottom-6 md:static">
        <img src="/sidebar.png" alt="Sidebar Visual" className="rounded w-32 mb-2 mt-32" />
        <p className="text-xs text-gray-400 w-40">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
