/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 bg-amber">
      <div className="container flex flex-wrap justify-between sm:justify-center sm:items-center mx-auto">
        <Link href="/" passHref>
          <a className="flex">
            <img
              src="/logo.png"
              className="mr-8 h-24 sm:h-18 mt-16 sm:mt-0 ml-4 sm:ml-0"
              alt="logo"
            />
          </a>
        </Link>

        <div className="w-auto">
          <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 text-sm sm:text-lg">
            <li>
              <Link href="/" passHref>
                <a
                  className="block py-2 pr-4 pl-3 text-orange rounded md:border-0 md:hover:text-rose md:p-0 hover:text-rose transition-all duration-300"
                  aria-current="page"
                >
                  Início
                </a>
              </Link>
            </li>
            <li>
              <Link href="#attendances" passHref>
                <a className="block py-2 pr-4 pl-3 text-orange rounded md:border-0 md:hover:text-rose md:p-0 hover:text-rose transition-all duration-300">
                  Serviços
                </a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a
                  id="#about"
                  className="block py-2 pr-4 pl-3 text-orange rounded md:border-0 md:hover:text-rose md:p-0 hover:text-rose transition-all duration-300"
                >
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              <Link href="#depositions">
                <a className="block py-2 pr-4 pl-3 text-orange rounded md:border-0 md:hover:text-rose md:p-0 hover:text-rose transition-all duration-300">
                  Depoimentos
                </a>
              </Link>
            </li>
            <li>
              <Link href="#attendances">
                <a
                  id="#attendances"
                  className="block py-2 pr-4 pl-3 text-orange rounded md:border-0 md:hover:text-rose md:p-0 hover:text-rose transition-all duration-300"
                >
                  Atendimentos
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <a className="block py-2 pr-4 pl-3 text-orange rounded md:border-0 md:hover:text-rose md:p-0 hover:text-rose transition-all duration-300">
                  Contatos
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
