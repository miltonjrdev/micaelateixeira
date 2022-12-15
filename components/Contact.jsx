import React, { useRef } from "react";

import { MailIcon } from "@heroicons/react/outline";

const Contact5 = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
    Do something here !
    */
  };

  return (
    <div className="container mx-auto">
      <div className="relative mx-auto w-full max-w-7x1 bg-amber text-gray-700">
        <div className="grid grid-cols-2">
          {/* :MAP CONTAINER */}
          <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
            <div className="order-1 col-span-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.7959560867184!2d-8.608301084354054!3d41.11714712066677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b8c35b07529%3A0x22be23d93a4b9883!2sStudio%20Micaela%20Teixeira!5e0!3m2!1spt-BR!2sbr!4v1661469126750!5m2!1spt-BR!2sbr"
                title="map"
                scrolling="no"
                frameBorder="0"
                width="100%"
                height="300px"
                className="rounded-lg"
                loading="lazy"
              />
            </div>{" "}
          </div>

          {/* :CONTACT INFOS CONTAINER */}
          <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
            <div className="mx-auto max-w-xl flex flex-col space-y-5">
              {/* ::Title Contact Us */}
              <h2 className="text-3xl text-rose">Deseja falar conosco?</h2>
              {/* ::Text */}
              <p className="text-sm text-gray-600 text-justify">
                Estamos localizados em uma das áreas mais sofisticadas da
                cidade. A região é de fácil acesso e segura para que você possa
                transitar sem maiores problemas, além de possuir estacionamento
                privativo no local. Agende seu atendimento e comece a melhorar
                sua qualidade de vida agora mesmo.
              </p>
              {/* ::Email contact */}
              <a
                href="https://www.gmail.com"
                className="inline-flex items-center text-sm text-rose font-semibold hover:text-gray-400"
              >
                <MailIcon className="mr-2 w-6 text-gray-300" />
                micaelateixeira.pt@gmail.com
              </a>
              {/* ::Address */}
              <p className="text-sm text-gray-600 leading-6">
                Av. Da República 2411 SL Esq / Vila Nova de Gaia <br /> 4430-207
                - Vila Nova de Gaia <br /> Portugal
              </p>
              {/* ::Socials */}
              <div className="flex items-center">
                {/* :Instagram */}
                <a
                  href="https://www.instagram.com/studiomicaelateixeira/"
                  className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125"
                >
                  {/* ::instagram svg */}
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* :FACEBOOK */}
                <a
                  href="https://www.facebook.com/people/Studio-Micaela-Teixeira/100082863758119/"
                  className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                  style={{ backgroundColor: "#4267B2" }}
                >
                  {/* ::facebook svg */}
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact5;
