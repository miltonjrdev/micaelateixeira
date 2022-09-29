import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 bg-amber">
      <div className="container flex flex-wrap justify-between sm:justify-center sm:items-center mx-auto">
        <Link href="/" passHref>
          <a className="flex items-center">
            <img src="/logo.png" className="mr-8 h-24 sm:h-16" alt="logo" />
          </a>
        </Link>

        <div className="w-auto">
          <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 text-sm sm:text-base font-semibold sm:font-medium">
            <li>
              <Link href="/" passHref>
                <a
                  className="block py-2 pr-4 pl-3 text-orange sm:p-0"
                  aria-current="page"
                >
                  Início
                </a>
              </Link>
            </li>
            <li>
              <Link href=" " passHref>
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-orange dark:hover:bg-orange md:dark:hover:bg-transparent">
                  Serviços
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servicos">
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-orange dark:hover:bg-orange md:dark:hover:bg-transparent">
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servicos">
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-orange dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Depoimentos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servicos">
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-orange dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Atendimentos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contato" passHref>
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-orange dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
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
