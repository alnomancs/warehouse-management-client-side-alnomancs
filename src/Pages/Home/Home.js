import React from "react";
import Contact from "../Contact/Contact";
import Items from "../Items/Items";
import Slider from "../Slider/Slider";
import SupplierReview from "../SupplierReview/SupplierReview";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Items></Items>
      <SupplierReview></SupplierReview>
      <Contact></Contact>

    </div>
  );
};

export default Home;
