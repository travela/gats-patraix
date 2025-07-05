import React from "react";

const Header = () => {
  return (
    <header className="bg-amber-50 shadow-xs cursor-cell sticky top-0 opacity-90">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            Gats de Patraix
          </div>
          <nav>
            <a href="#" className="px-4 text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="px-4 text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="px-4 text-gray-600 hover:text-gray-800">
              Cats
            </a>
            <a href="#" className="px-4 text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
