import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Attendance from "../components/Attendance";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Attendance />
      <Footer />
    </div>
  );
};

export default Home;
