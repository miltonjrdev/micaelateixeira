import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 bg-white">
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <Link href="/" passHref>
          <a className="flex items-center">
            <img src="/logo.png" className="mr-3 h-6 sm:h-10" alt="logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap text-rose">
              Micaela Teixeira
            </span>
          </a>
        </Link>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-rose"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="/" passHref>
                <a
                  className="block py-2 pr-4 pl-3 text-white bg-rose rounded md:bg-transparent md:text-rose md:p-0 dark:bg-rose md:dark:bg-transparent font-bold"
                  aria-current="page"
                >
                  Início
                </a>
              </Link>
            </li>
            <li>
              <Link href=" " passHref>
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Nosso espaço
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Serviços
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Agende seu atendimento
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
