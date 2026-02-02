
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#14325a] w-full py-4 border-b border-white/10 shadow-xl">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <nav className="flex items-center gap-8 text-sm font-semibold text-white/80 uppercase tracking-wide">
          <a href="#" className="text-white border-b-2 border-[#ffcc00] pb-1">Home</a>
          <a href="#" className="hover:text-white transition-colors">Reviews</a>
          <a href="#" className="hover:text-white transition-colors">Comparisons</a>
          <a href="#" className="hover:text-white transition-colors">Deals</a>
        </nav>

        <button className="border border-white/40 hover:border-white text-white px-6 py-1.5 rounded-lg text-sm font-medium transition-all">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
