import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Состояние для открытия/закрытия бокового меню на мобильных экранах
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Базовые классы для ссылки: относительное позиционирование + нижний отступ под линию
  const navItemClass = "relative pb-2 transition-all duration-300";

  // Функция, возвращающая разметку для ссылки с анимированной линией
  const renderNavLink = (to, label, onClick) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={() => `${navItemClass} text-white`} // Текст всегда белый
    >
      {({ isActive }) => (
        <>
          {label}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#dc3545] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
        </>
      )}
    </NavLink>
  );

  return (
    <header className="relative bg-[#04091e] shadow">
      {/* Шапка сайта */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип/Название */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            My Bakery
          </div>

          {/* Горизонтальное меню (отображается на экранах >= sm) */}
          <nav className="hidden sm:flex space-x-6">
            {renderNavLink("/", "Home")}
            {renderNavLink("/menu", "Menu")}
            {renderNavLink("/about", "About")}
            {renderNavLink("/contact", "Contact")}
          </nav>

          {/* Кнопка "гамбургер" (отображается на экранах < sm) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-gray-300 focus:outline-none"
            >
              {open ? (
                // Иконка "крестик"
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Иконка "гамбургер" (три полоски)
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Оверлей (затемняет контент) при открытом мобильном меню */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
          sm:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* Боковое (вертикальное) мобильное меню */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-xl 
          transform transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"} 
          sm:hidden z-50`}
      >
        {/* Кнопка-крестик внутри меню (закрывает меню) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Вертикальный список ссылок в боковом меню */}
        <nav className="flex flex-col mt-16 p-4 space-y-4 text-white">
          {renderNavLink("/", "Home", () => setOpen(false))}
          {renderNavLink("/menu", "Menu", () => setOpen(false))}
          {renderNavLink("/about", "About", () => setOpen(false))}
          {renderNavLink("/contact", "Contact", () => setOpen(false))}
        </nav>
      </aside>
    </header>
  );
}

export default Navbar;
