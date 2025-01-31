import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 shadow-md p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-teal-700 text-2xl font-bold">TaskMate</h2>
          <p className="text-gray-600 mt-1">Your ultimate task management companion.</p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <Link to="/todopage" className="hover:text-teal-600">Todo</Link>
          <Link to="/weatherpage" className="hover:text-teal-600">Weather</Link>
          <Link to="/budgettrackerpage" className="hover:text-teal-600">BudgetTracker</Link>

        </div>

        {/* Right Section - Social Media */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-teal-600">Facebook</a>
          <a href="#" className="hover:text-teal-600">Twitter</a>
          <a href="#" className="hover:text-teal-600">LinkedIn</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TaskMate. All Rights Reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-teal-600 hover:underline mt-2"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
