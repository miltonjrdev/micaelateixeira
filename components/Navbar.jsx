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
                  className="block py-2 pr-4 pl-3 text-orange sm:p-0"
                  aria-current="page"
                >
                  Início
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servicos" passHref>
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                  Serviços
                </a>
              </Link>
            </li>
            <li>
              <Link href=" ">
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servicos">
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                  Depoimentos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servicos">
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                  Atendimentos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contato" passHref>
                <a className="block py-2 pr-4 pl-3 text-orange rounded hover:bg-orange md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
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
