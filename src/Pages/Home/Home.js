import React from "react";
import Items from "../Items/Items";
import Slider from "../Slider/Slider";
import SupplierReview from "../SupplierReview/SupplierReview";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Items></Items>
      <SupplierReview></SupplierReview>
    </div>
  );
};

export default Home;
