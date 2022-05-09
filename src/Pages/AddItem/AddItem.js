import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = async (data) => {
    const email = user.email;
    const item = { ...data, email };
    console.log(item);
    const url = `http://localhost:5001/product/additem`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h1>Item Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-2"
          type="text"
          {...register("name")}
          placeholder="Name"
          required
        />
        <br />
        <textarea
          className="mt-2"
          type="text"
          {...register("description")}
          placeholder="Item Description"
          required
        />
        <br />
        <input
          className="mt-2"
          type="number"
          {...register("price", { min: 1 })}
          placeholder="Price"
          required
        />
        <br />
        <input
          className="mt-2"
          type="text"
          {...register("stock", { min: 1 })}
          placeholder="Stock"
          required
        />
        <br />
        <input
          className="mt-2"
          type="text"
          {...register("supplierName")}
          placeholder="Supplier Name"
          required
        />
        <br />
        <input
          className="mt-2"
          type="text"
          {...register("img")}
          placeholder="Image URL"
          required
        />
        <br />

        <p style={{ color: "red" }}>{}</p>
        <input className="mt-2" type="submit" value="Add Item " />
      </form>
    </div>
  );
};

export default AddItem;
