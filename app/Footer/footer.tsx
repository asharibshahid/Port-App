


import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            {/* Column 1: Logo or Brand Name */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Port-By-Asharib</h2>
              <p className="mt-4 text-sm sm:text-base">
                Making the web a more colorful place.
              </p>
            </div>

            {/* Column 2: Links */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Pages</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/" className="hover:text-black transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-black transition-colors">
               About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-black transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-black transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-black transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media Links */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/web_ghost.io/"
                  className="hover:text-black text-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 2C4.238 2 2 4.238 2 7v10c0 2.762 2.238 5 5 5h10c2.762 0 5-2.238 5-5V7c0-2.762-2.238-5-5-5H7zM12 9a3 3 0 100 6 3 3 0 000-6zm4-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/asharib-shahid-73a3022b5/"
                  className="hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8a6 6 0 016 6v7h-3v-7a3 3 0 00-6 0v7h-3v-7a6 6 0 016-6zM6 9H3v12h3V9zM4.5 7A1.5 1.5 0 114.5 4a1.5 1.5 0 010 3z"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/asharib.shahid?mibextid=ZbWKwL"
                  className="hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 2H6C4.895 2 4 2.895 4 4v16c0 1.105.895 2 2 2h7v-7H9v-3h4V9c0-2.209 1.791-4 4-4h2v3h-2c-.552 0-1 .448-1 1v2h3l-1 3h-2v7h3c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-100">
            Asharib-Website <br />All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
