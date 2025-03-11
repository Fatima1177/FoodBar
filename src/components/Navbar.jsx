import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-white shadow relative z-50 ">
      {/* Основной контейнер навбара */}
      <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 ">
        <div className="flex items-center justify-between m-9 h-30">
          {/* Лого */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-gray-800">
              The Bakary 
            </Link>
          </div>

          {/* Горизонтальное меню (большие экраны) */}
          <nav className="hidden sm:flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Home
            </Link>
            <Link to="/menu" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Menu
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Кнопка-бургер (мобильные экраны) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 text-gray-800 hover:text-gray-600 focus:outline-none transform hover:scale-110 transition-transform duration-300"
            >
              {open ? (
                // Иконка "Закрыть" (крестик)
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                // Иконка "Открыть" (три полоски)
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Оверлей, затемняющий страницу при открытом меню (только на мобильных) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
                    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} sm:hidden`}
        onClick={() => setOpen(false)} // Закрываем меню при клике на оверлей
      />

      {/* Боковое меню (мобильная версия) */}
      <div
        className={`fixed top-0 right-0 h-full w-64
                    bg-gradient-to-b from-white via-gray-50 to-white shadow-xl
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : 'translate-x-full'} sm:hidden z-50`}
      >
        <div className="flex flex-col mt-16 p-4 space-y-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
