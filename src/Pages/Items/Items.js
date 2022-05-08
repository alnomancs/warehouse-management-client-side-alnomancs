import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
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
      <h1>Inventory Section</h1>

      <Container>
        <Row>
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Items;
