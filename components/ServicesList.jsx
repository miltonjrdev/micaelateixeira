import React from "react";

import services from "../public/services";
import Card from "./Card";

export const Posts = () => {
  return (
    <div className="banner py-8 bg-rose w-full">
      <div className="container flex sm:flex-row flex-col justify-between items-center mx-auto">
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
