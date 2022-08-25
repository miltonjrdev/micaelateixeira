import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="container flex bg-white rounded-xl shadow-md overflow-hidden w-4/5 mb-5">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-64"
            src={image}
            alt="threading de sobrancelhas"
          />
        </div>
        <div className="p-8">
          <h2 className="text-2xl sm:text-start text-center font-semibold">
            {title}
          </h2>
          <p className="text-md text-black text-justify mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
