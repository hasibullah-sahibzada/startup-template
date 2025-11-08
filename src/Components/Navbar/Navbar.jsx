// Import React hooks for state management and lifecycle methods
import { useState, useEffect } from "react";

// Import light and dark mode logos
import logo from "../../assets/Images/Navbar/StartUp logo.svg";
import Darklogo from "../../assets/Images/Navbar/Startup dark-mode-logo.svg";

// Navbar functional component
export default function Navbar() {
  // State to track whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // State to detect dark mode
  const [isDark, setIsDark] = useState(false);

  // useEffect hook to detect dark mode using <html> classList
  useEffect(() => {
    // Function to check if 'dark' class is applied to <html>
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode(); // Initial check on mount

    // Set up a MutationObserver to watch for changes in class attribute of <html>
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"], // Only listen for class changes
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Function to toggle the mobile menu open/close
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* ============================ */}
      {/* Top Navigation Bar */}
      {/* ============================ */}
      <nav className="flex flex-row justify-between dark:bg-[#111928] items-center w-full p-4 sm:px-12 xl:px-28 bg-gray-50/95 fixed z-50">
        
        {/* Logo - dynamically switches based on dark mode */}
        <img
          src={isDark ? Darklogo : logo}
          alt="Logo"
          className="w-32 sm:w-36 lg:w-40 xl:w-44 cursor-pointer"
        />

        {/* ============================ */}
        {/* Desktop Navigation Menu */}
        {/* Visible on large screens only */}
        {/* ============================ */}
        <ul className="hidden lg:flex lg:gap-10 lg:relative lg:mr-28 xl:mr-64 cursor-pointer">
          <li className="hover:text-[#3758F9] dark:text-white font-medium font-oswald">
            Home
          </li>
          <li className="hover:text-[#3758F9] dark:text-white font-medium font-oswald">
            Payment
          </li>
          <li className="hover:text-[#3758F9] dark:text-white font-medium font-oswald">
            Features
          </li>
        </ul>

        {/* ============================ */}
        {/* Desktop Login / Sign Up Buttons */}
        {/* Hidden on smaller screens */}
        {/* ============================ */}
        <div className="gap-6 hidden sm:flex relative left-32 lg:left-0">
          <button className="font-oswald font-medium hover:text-[#3758F9] dark:text-white text-lg">
            <a href="#">Login</a>
          </button>
          <button className="bg-[#3758F9] font-oswald px-8 py-3 lg:px-7 lg:py-2.5 text-lg font-medium rounded-lg text-white hover:bg-[#2c47cc] hover:text-white">
            <a href="#">Sign Up</a>
          </button>
        </div>

        {/* ============================ */}
        {/* Mobile Hamburger Button */}
        {/* Visible on smaller screens */}
        {/* ============================ */}
        <button
          onClick={toggleMenu}
          className={`block sm:block lg:hidden focus:outline-none rounded-md
            ${menuOpen ? "border-2 border-[#3758F9]" : "border border-transparent"}
            ${isDark ? "text-white" : "text-gray-700"}
          `}
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon (3 lines) */}
          {!menuOpen ? (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDark ? "white" : "currentColor"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            // Close Icon (X)
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDark ? "white" : "currentColor"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* ============================ */}
      {/* Mobile Slide-out Menu */}
      {/* Appears when hamburger is toggled */}
      {/* ============================ */}
      {menuOpen && (
        <div
          className="fixed flex flex-col justify-center right-4 sm:right-11 top-[15vh] bg-white dark:bg-[#1f2a32] text-black dark:text-white 
          rounded-xl p-6 w-[65vw] h-[30vh] sm:w-[34vw] z-50 lg:hidden"
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col justify-start items-start gap-5 font-medium font-sans">
            <li
              className="list-none cursor-pointer hover:text-[#3758F9]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="list-none cursor-pointer hover:text-[#3758F9]"
              onClick={() => setMenuOpen(false)}
            >
              Payment
            </li>
            <li
              className="list-none cursor-pointer hover:text-[#3758F9]"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
