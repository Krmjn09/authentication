import { useState } from "react";
import { Link } from "react-router-dom";

const JournalPage = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center sm:hidden mr-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16v12H4zM4 12h16v12H4z"
              />
            </svg>
          </button>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-xl font-bold">
                Your Brand
              </Link>
            </div>
            <div className="hidden sm:flex space-x-4 ml-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Right-side elements (optional) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11.38V17.5h4v-6.12zM17.5 7.38V12.5h4v-5.12zM19.87 3.74C19.76 3.22 19.32 2.86 18.8 2.55l-1.2-1.2C17.4 1.12 16.88 1 16.32 1S15.24 1.12 14.8 1.4l-1.2 1.2C13.32 2.55 12.88 2.86 12.76 3.22L10.87 5.12c-0.27 0.27-0.27 0.7 0 0.97l1.2 1.2c0.27 0.27 0.7 0.27 0.97 0L19.87 3.74zM14.9 19.5h4v-4.6h-4v4.6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default JournalPage;
