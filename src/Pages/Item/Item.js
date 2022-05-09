import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, description, price, stock, supplierName, img } = item;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="gx-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card w-100 m-3">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Des: {description}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Stock: {stock}</p>
          <p className="card-text">Supplier Name: {supplierName}</p>

          <div className="text-center">
            <button
              onClick={() => navigateToServiceDetail(_id)}
              className="btn btn-dark"
            >
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
