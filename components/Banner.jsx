import React from "react";
import homeData from "../data/homeData";

import Link from "next/dist/client/link";

const Banner = ({ title, description, cta, imageURL }) => {
  return (
    <div className="banner bg-rose w-full">
      <div className="container flex sm:flex-row flex-col justify-between items-center mx-auto">
        <div className="flex flex-row flex-wrap w-full sm:w-7/12 md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center sm:text-left justify-center sm:justify-start">
          <h1 className="text-white text-4xl w-full font-semibold pt-6 sm:pt-0">
            {homeData.title}
          </h1>
          <p className="text-white pb-4 py-8 tracking-wide leading-relaxed">
            {homeData.description}
          </p>
          <Link href={homeData.cta.href} passHref>
            <a className="text-white py-3 px-8 border-2 rounded-full cursor-pointer hover:text-rose hover:bg-white">
              {homeData.cta.title}
            </a>
          </Link>
        </div>
        <div className="w-full sm:w-1/2">
          <img className="w-full" alt="" src={homeData.imageURL} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
