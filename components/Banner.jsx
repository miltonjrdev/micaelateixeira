/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner-pattern">
      <div className="container mx-auto flex flex-col sm:flex-row items-center w-full sm:w-1/2">
        <img
          className="sm:max-w-xl sm:block pl-10 sm:pl-0"
          src="1.png"
          alt="profile"
        />
        <div>
          <p className="sm:text-lg text-orange text-justify sm:text-start py-8 px-8 sm:py-0 sm:px-0">
            Cuidar do nosso visual é uma das coisas mais importantes para nos
            sentirmos bem, por isso venha agendar um atendimento e me permita
            cuidar do seu.
          </p>
          <p className="text-center text-rose text-2xl py-6">
            Micaela Teixeira
          </p>

          <button className="bg-rose text-amber text-center sm:text-2xl rounded-full px-12 sm:px-20 py-4 mb-8">
            <a href="https://buk.pt/studiomicaela-teixeira">Agendar</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
