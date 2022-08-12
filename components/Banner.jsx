import React from "react";

import Link from "next/dist/client/link";

export const Banner = () => {
  return (
    <div className="banner py-8 bg-rose w-full">
      <div className="container flex sm:flex-row flex-col justify-between items-center mx-auto">
        <div className="flex flex-row flex-wrap w-full sm:w-7/12 md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center sm:text-left justify-center sm:justify-start">
          <h1 className="text-white text-4xl w-full font-semibold pt-6 sm:pt-0">
            Micaela Teixeira
          </h1>
          <p className="text-white pb-4 py-12 tracking-wide leading-relaxed">
            Cuidar do nosso visual é uma das coisas mais importantes para nos
            sentirmos bem, por isso venha agendar um atendimento e me permita
            cuidar do seu.
          </p>
          <Link href="https://buk.pt/studiomicaela-teixeira">
            <button className="text-white py-3 px-8 border-2 rounded-full cursor-pointer hover:text-rose hover:bg-white">
              Agende seu atendimento
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            className="w-full rounded-full shadow-xl"
            alt="image-banner"
            src="/images/photo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
