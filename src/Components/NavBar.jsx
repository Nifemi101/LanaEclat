import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. BACKGROUND BLUR OVERLAY */}
      {/* This div covers the entire screen. We use 'fixed' and a high z-index (but lower than the nav). */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 w-screen h-screen bg-black/10 backdrop-blur-md z-[45] animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)} // Closes menu when clicking the blurred area
        />
      )}

      {/* 2. HEADER CONTAINER */}
      {/* Increased z-index to 50 to stay ABOVE the blur overlay */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
        <nav
          className="relative flex items-center justify-between px-6 py-3 
                     bg-white/30 backdrop-blur-lg 
                     border border-white/40 rounded-full 
                     shadow-sm transition-all duration-300"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h2 className="text-[#B04A6B] font-serif italic text-2xl font-bold tracking-wide cursor-pointer">
                Lana Eclat
              </h2>
            </Link>
          </div>

          {/* Desktop nav View */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 text-sm font-medium tracking-wide hover:text-[#B04A6B] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-gray-800 text-sm font-medium tracking-wide hover:text-[#B04A6B] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-800 text-sm font-medium tracking-wide hover:text-[#B04A6B] transition-colors"
            >
              Services
            </Link>

            <button className="bg-[#B04A6B] text-white uppercase tracking-[0.15em] text-xs font-semibold px-7 py-3 rounded-full hover:bg-[#913b57] transition-all duration-300">
              BOOK NOW
            </button>
          </div>

          {/* Mobile nav Toggle */}
          <button
            className="md:hidden text-[#B04A6B] p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* 3. MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="absolute top-[120%] left-0 w-full bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-6 flex flex-col items-center space-y-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <Link
              to="/"
              className="text-gray-800 text-lg font-medium hover:text-[#B04A6B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-gray-800 text-lg font-medium hover:text-[#B04A6B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

             <Link
              to="/services"
              className="text-gray-800 text-lg font-medium hover:text-[#B04A6B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            <button className="bg-[#B04A6B] text-white uppercase tracking-[0.2em] text-[9px] font-bold px-5 py-4 rounded-full hover:bg-[#913b57] transition-all duration-300 w-fit min-w-27 leading-none">
              BOOK NOW
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;