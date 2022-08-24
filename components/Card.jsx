import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="container flex bg-white rounded-xl shadow-md overflow-hidden w-4/5 self-center">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/images/s1.png"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <h2 className="text-2xl sm:text-start text-center font-semibold">
            Threading de sobrancelhas
          </h2>
          <p class="text-md text-black text-justify mt-2">
            Depilação com linha é uma técnica que consiste em apenas utilizar um
            fio 100% de algodão. Esta é uma técnica idealmente utilizada para a
            depilação de sobrancelhas, buço e/ou outras zonas do rosto, por ser
            uma das técnicas menos agressivas para a remoção do pelo pela raíz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
