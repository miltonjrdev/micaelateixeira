import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Attendance from "../components/Attendance";
import Depositions from "../components/Depositions";
import Contact from "../components/Contact";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Attendance />
      <Depositions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
