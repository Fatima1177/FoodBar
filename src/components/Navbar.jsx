import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navItemClass = "relative pb-2 transition-all duration-300";

  const renderNavLink = (to, label, onClick) => (
    <NavLink to={to} onClick={onClick} className={({ isActive }) => `${navItemClass} text-white ${isActive ? 'text-red-500' : ''}`}>
        {label}
    </NavLink>

  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#04091e] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-bold text-white">My Bakery</div>

          <nav className="hidden sm:flex space-x-6">
            {renderNavLink("/", "Home")}
            {renderNavLink("/menu", "Menu")}
            {renderNavLink("/about", "About")}
            {renderNavLink("/contact", "Contact")}
          </nav>

          <div className="sm:hidden">
            <button onClick={toggleMenu} className="p-2 text-white hover:text-gray-300 focus:outline-none">
              {open ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg> ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} sm:hidden`}onClick={() => setOpen(false)}/>
    
      <aside className={`fixed top-0 right-0 h-full w-64 bg-black shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} sm:hidden z-50`}>
      <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav className="flex flex-col mt-16 p-4 space-y-4 text-white">
        <NavLink to="/" className="text-white" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/menu" className="text-white" onClick={() => setOpen(false)}>Menu</NavLink>
        <NavLink to="/about" className="text-white" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/contact" className="text-white" onClick={() => setOpen(false)}>Contact</NavLink>
      </nav>
      </aside>

    </header>
  );
}

export default Navbar;
