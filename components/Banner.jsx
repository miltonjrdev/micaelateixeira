import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner-pattern">
      <div className="container mx-auto flex items-center">
        <img className="max-w-xl block" src="1.png" alt="profile" />
        <div className="px-12">
          <p className="text-xl text-orange text-start">
            Cuidar do nosso visual é uma das coisas mais importantes para nos
            sentirmos bem, por isso venha agendar um atendimento e me permita
            cuidar do seu.
          </p>
          <p className="text-center text-rose text-2xl py-6">
            Micaela Teixeira
          </p>
          <button className="text-white text-2xl bg-rose rounded-full px-20 py-4">
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
