// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const JournalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="bg-gray-800 text-white fixed top-0 left-0 w-full z-60">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Your Brand Name
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
              <Link to="/journal" className="hover:text-gray-400">
                Journal
              </Link>
              {/* Add more links as needed */}
            </nav>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-full right-0 bg-gray-800 w-full py-4 px-5 rounded-b-lg  shadow-sm">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/journal"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    Journal
                  </Link>
                </li>

                {/* Add more links as needed */}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default JournalPage;
