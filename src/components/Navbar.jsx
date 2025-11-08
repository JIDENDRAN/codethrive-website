import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/"
           className="flex items-center gap-2 text-2xl font-bold tracking-wide hover:text-gray-300 transition"
>
          <img src="/assets/favicon-dark.png" alt="CodeThrive Logo" className="h-10 w-10 object-contain"/>
          <span>CodeThrive</span>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-base font-medium">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
            <Link to="/projects" className="hover:text-blue-500 transition">
              Projects
            </Link>
           
            <Link to="/FAQ" className="hover:text-gray-300 transition">
              FAQ
            </Link> 
            <Link to="/about" className="hover:text-gray-300 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none hover:text-gray-300 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
  <div className="md:hidden bg-gray-800 border-t border-gray-700">
    <Link
      to="/"
      className="block px-4 py-3 hover:bg-gray-700 transition"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>

    
    <Link
      to="/services"
      className="block px-4 py-3 hover:bg-gray-700 transition"
      onClick={() => setIsOpen(false)}
    >
      Services
    </Link>

    <Link
      to="/projects"
      className="block px-4 py-3 hover:bg-gray-700 transition"
      onClick={() => setIsOpen(false)}
    >
      Projects
    </Link>

    <Link
      to="/faq"
      className="block px-4 py-3 hover:bg-gray-700 transition"
      onClick={() => setIsOpen(false)}
    >
      FAQ
    </Link>
 
    <Link
      to="/about"
      className="block px-4 py-3 hover:bg-gray-700 transition"
      onClick={() => setIsOpen(false)}
    >
      About Us
    </Link>

    <Link
      to="/contact"
      className="block px-4 py-3 hover:bg-gray-700 transition"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
  </div>
)}

    </nav>
  );
}
