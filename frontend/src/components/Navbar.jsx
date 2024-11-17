import React from "react";

const Navbar = ({ onAddUser }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-75 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-900">
          User Management
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onAddUser}
            className="bg-black text-white px-4 py-2 font-semibold text-sm rounded-md hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
