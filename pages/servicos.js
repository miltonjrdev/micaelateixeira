import React from "react";

import Navbar from "../components/Navbar";
import ServicesList from "../components/ServicesList";
import Footer from "../components/Footer";

export const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
