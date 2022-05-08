import React from "react";
import { Card, Col } from "react-bootstrap";

const Item = ({ item }) => {
  const { name, description, price, stock, supplierName, img } = item;
  return (
    <Col xs lg="4">
      {" "}
      <Card className="m-2">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Card.Text>Supplier Name: {supplierName}</Card.Text>

          <Card.Link href="/inventory/id">Update</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
