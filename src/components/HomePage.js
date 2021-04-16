import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ControlledCarousel from "./Carousel";
import CustomizedInputBase from "./SearchBar";

const Home = () => {
  return (
    <>
      <ControlledCarousel />
      <CustomizedInputBase />
    </>
  );
};
export default Home;
