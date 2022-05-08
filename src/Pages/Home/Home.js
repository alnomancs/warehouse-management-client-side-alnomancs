import React from "react";
import Items from "../Items/Items";
import Footer from "../Shared/Footer/Footer";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Items></Items>

      <Footer></Footer>
    </div>
  );
};

export default Home;
