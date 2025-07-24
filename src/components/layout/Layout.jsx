import React, { useState, useRef, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const sidebarRef = useRef();

 useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="relative flex min-h-screen">
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white text-black p-2 rounded-full shadow"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <MdMenu size={24} />
      </button>
       <div ref={sidebarRef}>
        
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
       </div>
      <div className="hidden md:block w-[1px] bg-gray-800"></div>
      <div className="flex-1 pt-8 md:pt-0">
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
