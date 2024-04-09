import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-semibold">Unsplash API Client</Link>
        </div>
        <div>
          <Link to="/documentation" className="px-4">Documentation</Link>
          <Link to="/gallery" className="px-4">Gallery</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
