// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          <span className="text-orange-500">Library</span> Management
        </Link>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            <Link to="/catalog">Catalog</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            <Link to="/login">Login/Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
