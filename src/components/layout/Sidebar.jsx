import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full md:w-[200px] min-h-screen bg-black p-6 flex flex-col justify-between relative">
      
      <div>
        <img src="/logo.png" alt="VAYUZ Logo" className="w-24 mb-8 mx-auto " />

        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 mb-6 hover:scale-105 transition duration-300">
          <button className="bg-black text-white text-sm px-5 py-2 rounded-full font-semibold">
            CONTACT US
          </button>
        </div>

        <ul className="space-y-4 text-sm font-medium">
          <li><a href="#" className="hover:text-blue-400">App Development</a></li>
          <li><a href="#" className="hover:text-blue-400">Challenges</a></li>
          <li><a href="#" className="hover:text-blue-400">Hire Developer</a></li>
          <li><a href="#" className="hover:text-blue-400">Community</a></li>
        </ul>
      </div>

   <div className="md:hidden mt-[20vh] flex flex-col items-center text-center">
  <img src="/sidebar.png" alt="Visual" className="rounded w-32 mb-2" />
  <p className="text-xs text-gray-400 max-w-[160px]">
    Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
  </p>
</div>

      <div className="hidden md:block absolute left-8 top-[20%] transform -translate-y-1/2">
        <img src="/sidebar.png" alt="Visual" className="rounded w-32 mb-2" />
        <p className="text-xs text-gray-400 w-40">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
