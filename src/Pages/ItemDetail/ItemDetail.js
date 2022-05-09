import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const url = `https://serene-brook-42107.herokuapp.com/product/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  const handleUpdate = (id) => {
    console.log(item.stock);
    if (item.stock > 0) {
      const stock = item.stock - 1;
      const newItem = { ...item, stock };
      setItem(newItem);

      const url = `https://serene-brook-42107.herokuapp.com/product/update?_id=${id}&stock=${item.stock}`;
      ////console.log(url);

      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        });
    } else {
      toast("Stock Empty. You cant delivered item");
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //console.log(data);

    const stock = parseInt(item.stock) + parseInt(data.newStock);
    const newItem = { ...item, stock };
    setItem(newItem);

    const url = `https://serene-brook-42107.herokuapp.com/product/addToStock?_id=${id}&stock=${stock}`;
    //console.log(url);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast("Stock Updated");
      });
  };
  return (
    <>
      <Card className="mx-auto w-50 m-2">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {item.price}</ListGroupItem>
          <ListGroupItem>Stock: {item.stock}</ListGroupItem>
          <ListGroupItem>Supplier Name: {item.supplierName}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button
            onClick={() => handleUpdate(item._id)}
            className="btn btn-dark me-2"
          >
            Delivered
          </button>
        </Card.Body>
        {/* <form onSubmit={handleAddToStock}>
        <input className="m-2" type="text" name="newQty" id="" />
        <br />
        <input className="btn btn-dark" type="submit" value="Add To Stock" />
      </form> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            {...register("newStock", { min: 1, max: 1000 })}
          />
          <input type="submit" value="Add to stock" />
        </form>
      </Card>
      <ToastContainer />{" "}
    </>
  );
};

export default ItemDetail;
