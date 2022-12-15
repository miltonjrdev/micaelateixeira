/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner-pattern">
      <div className="container mx-auto flex flex-col sm:flex-row items-center ">
        <img
          className="sm:max-w-xl sm:block pl-10 sm:pl-0"
          src="1.png"
          alt="profile"
        />
        <div className="flex flex-col justify-end">
          <p className="sm:text-lg text-orange text-justify sm:text-start py-8 px-8 sm:py-0">
            Cuidar do nosso visual é uma das coisas mais importantes para nos
            sentirmos bem, por isso venha agendar um atendimento e me permita
            cuidar do seu.
          </p>
          <p className="text-center text-rose text-2xl py-6">
            Micaela Teixeira
          </p>

          <button className="bg-rose text-amber text-center sm:text-xl mx-auto w-fit rounded-full px-12 sm:px-20 py-4 mb-8 hover:bg-rose hover:opacity-80 transition-all duration-300 hover:scale-105">
            <a href="https://buk.pt/studiomicaela-teixeira">Agendar</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
