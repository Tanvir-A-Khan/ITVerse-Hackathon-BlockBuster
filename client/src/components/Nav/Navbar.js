import React from "react";
import { Link } from "react-router-dom";
import ConnectButton from "./ConnectButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-2">
      {/* Left Section: Search Bar */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 mr-2 stroke-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M21 21l-5-5M15 10A5 5 0 107 10a5 5 0 008 0M4 20v-2"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full border border-gray-400 focus:outline-none"
        />
      </div>

      {/* Center Section: Redirect to Home Page */}
      <Link to="/" className="text-white text-3xl font-bold hover:text-yellow-300">
        ArtBlock
      </Link>

      {/* Right Section: ConnectButton */}
      <div className="flex gap-4">
        <Link
          to="/buyABX"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Buy ABX
        </Link>

        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
