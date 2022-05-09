import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const confirmation = window.confirm(
      "Are you want to delete this item from stock"
    );
    if (confirmation) {
      const url = `http://localhost:5001/product/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingItem = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingItem);
        });
    }
  };

  return (
    <div>
      <h1>Available Product : {products.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td> {product.name} </td>
              <td> {product.description} </td>
              <td> {product.price} </td>
              <td> {product.stock} </td>
              <td> {product.supplierName} </td>
              <td>
                {" "}
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-danger border"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventory;
