import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        
       
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Quiz Logo"
            className="w-10 h-10"
          />
          <h2 className="text-2xl font-bold text-amber">Quiz-App</h2>
        </div>

       
        <div className="flex gap-8 items-center text-base font-medium text-gray-800">
          <Link to="/" className="hover:text-indigo-600 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 transition duration-200">
            Contact
          </Link>

          <button
            onClick={handleSignIn}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300"
          >
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
