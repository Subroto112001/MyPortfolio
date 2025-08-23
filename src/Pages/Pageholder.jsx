import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../HomePageComponent/Header";
import Footer from "../HomePageComponent/Footer";

const Pageholder = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Pageholder;
