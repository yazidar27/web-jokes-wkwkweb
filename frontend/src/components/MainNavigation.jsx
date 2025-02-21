import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#569085] border-gray-200 dark:bg-[#569085]">
      <div className="max-w-screen-xl flex items-center mx-auto p-4 relative">
        {/* Logo di Kiri */}
        <div className="flex-grow">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./komedi.png" className="h-8" alt="Flowbite Logo" />
            <span
              className="relative self-center text-2xl font-semibold whitespace-nowrap dark:text-white
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-700
              after:transition-all after:duration-300 hover:after:w-full dark:hover:after:bg-[#eab86e]"
            >
              WkwkWeb
            </span>
          </NavLink>
        </div>

        {/* Tombol Menu untuk Mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden absolute right-4 p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
          dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigasi Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:absolute md:left-1/2 md:-translate-x-1/2`}
          id="navbar-cta"
        >
          <ul
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 
              border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-transparent dark:bg-gray-800 
              md:dark:bg-transparent dark:border-gray-700"
          >
            {["Home", "About", "Explore Jokes", "Register"].map(
              (item, index) => (
                <li key={index}>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Register"
                        ? "/auth/register"
                        : `/jokes/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="relative block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-pink-700 md:dark:hover:text-[#eab86e] dark:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-700 
                  after:transition-all after:duration-300 hover:after:w-full md:dark:hover:after:bg-[#eab86e]"
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
