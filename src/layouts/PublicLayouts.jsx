import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footert from "../components/Footert";
const PublicLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footert />
    </>
  );
};

export default PublicLayouts;
