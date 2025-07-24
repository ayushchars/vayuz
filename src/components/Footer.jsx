import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 py-10 ">
      <div className="flex flex-wrap justify-start gap-6 text-sm text-gray-400 font-sans">
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Insights</a>
        <a href="#" className="hover:text-white transition">Community</a>
        <a href="#" className="hover:text-white transition">Privacy & Policies</a>
      </div>
    </footer>
  );
};

export default Footer;
