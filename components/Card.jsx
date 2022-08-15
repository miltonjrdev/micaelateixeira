import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="sm:w-1/3 max-w-sm m-2 rounded-lg overflow-hidden shadow-xl">
      <img className="w-full" src={image} alt={title} />
      <div className="bg-white px-6 py-4">
        <div className="text-xl sm:text-2xl text-center font-bold mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-sm text-justify sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
