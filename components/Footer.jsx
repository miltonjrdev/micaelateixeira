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
      <div className="footer bg-rose w-full py-4 pl-4 rounded-t-full">
        <div className="container flex md:flex-row flex-col justify-center items-start mx-auto">
          <div className="py-5">
            <img
              src="images/logo-footer.png"
              className="mr-3 h-12 sm:h-10"
              alt="logo"
            />
          </div>
          <div className="py-5">
            <ul>
              <p className="text-white text-lg pb-6">
                <span>Acompanhe nas redes sociais</span>
              </p>
              <div className="flex gap-6">
                <div className="text-2x1 text-white cursor-pointer hover:text-orange">
                  <Link
                    href="https://www.instagram.com/studiomicaelateixeira/"
                    passHref
                  >
                    <a>
                      <FaInstagram />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 text-white cursor-pointer hover:text-orange">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100082863758119"
                    passHref
                  >
                    <a>
                      <FaFacebook />
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
                  <Link href="https://www.linkedin.com" passHref>
                    <a>
                      <FaLinkedin />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 text-white cursor-pointer hover:text-orange">
                  <Link href="https://www.youtube.com" passHref>
                    <a>
                      <FaYoutube />
                    </a>
                  </Link>
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
