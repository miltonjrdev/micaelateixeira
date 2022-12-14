/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-rose w-full py-4 pl-4 rounded-t-3xl sm:rounded-t-full">
        <div className="container flex flex-row justify-between items-start mx-auto px-8 sm:px-36">
          <div className="py-5">
            <img
              src="images/logo-footer.png"
              className="mr-3 h-12 sm:h-20"
              alt="logo"
            />
          </div>
          <div className="py-5">
            <ul>
              <p className="text-white text-sm sm:text-lg pb-4">
                <span>Acompanhe nas redes sociais</span>
              </p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <div className="text-2x1 text-white cursor-pointer hover:text-orange">
                  <Link
                    href="https://www.instagram.com/studiomicaelateixeira/"
                    passHref
                  >
                    <a>
                      <ImInstagram />
                    </a>
                  </Link>
                </div>
                <div
                  className="text-2x1 text-white cursor-pointer hover:text-orange"
                  target="blank"
                >
                  <Link href="https://www.twitter.com" passHref>
                    <a>
                      <FaTwitter />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 text-white cursor-pointer hover:text-orange">
                  <Link href="https://web.whatsapp.com/" passHref>
                    <a>
                      <IoLogoWhatsapp />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 text-white cursor-pointer hover:text-orange">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100082863758119"
                    passHref
                  >
                    <a>
                      <FaFacebookF />
                    </a>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 bg-rose items-center">
        <h1 className="text-white text-xs sm:text-sm text-center">
          Studio Micaela Teixeira © 2022 . Todos os direitos reservados.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
