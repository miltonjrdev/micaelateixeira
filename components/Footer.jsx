import React from "react";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-gray-50 h-1/2 w-full pb-8">
        <div className="container flex md:flex-row flex-col justify-between items-start mx-auto">
          <div className="py-5">
            <img src="/logo.png" class="mr-3 h-6 sm:h-10" alt="logo" />
          </div>
          <div className="py-5">
            <ul>
              <h3 className="text-lg pb-6">Navegue</h3>
              <Link href="/">
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose cursor-pointer">
                  Início
                </li>
              </Link>
              <Link href="/blog">
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose cursor-pointer">
                  Blog
                </li>
              </Link>
            </ul>
          </div>
          <div className="py-5">
            <ul>
              <p className="text-lg pb-6">
                <span>Acompanhe nas redes:</span>
              </p>
              <div className="flex gap-6">
                <div className="text-2x1 cursor-pointer hover:text-rose">
                  <a href="https://www.instagram.com/studiomicaelateixeira/">
                    <FaInstagram icon={FaInstagram} />
                  </a>
                </div>
                <div className="text-2x1 cursor-pointer hover:text-rose">
                  <a href=" " target="blank">
                    <FaFacebook icon={FaFacebook} />
                  </a>
                </div>
                <div
                  className="text-2x1 cursor-pointer hover:text-rose"
                  target="blank"
                >
                  <a href=" " target="blank">
                    <FaTwitter icon={FaTwitter} />
                  </a>
                </div>
                <div className="text-2x1 cursor-pointer hover:text-rose">
                  <a href=" " target="blank">
                    <FaLinkedin icon={FaLinkedin} />
                  </a>
                </div>
                <div className="text-2x1 cursor-pointer hover:text-rose">
                  <a href=" " target="blank">
                    <FaYoutube icon={FaYoutube} />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-5 bg-rose items-center">
        <h1 className="text-white text-sm text-center">
          Studio Micaela Teixeira © 2022 . Todos os direitos reservados.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
