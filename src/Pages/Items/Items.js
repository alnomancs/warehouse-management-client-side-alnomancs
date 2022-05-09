import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";

import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/inventoryItem")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  return (
    <div>
      <div className="container" id="experts">
        <h2 className="text-primary">Inventory Section</h2>
        <div className="row gx-2">
          {items.map((item) => (
            // <Expert key={expert.id} expert={expert}></Expert>
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
