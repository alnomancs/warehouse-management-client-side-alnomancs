import React from "react";
import { ListGroup } from "react-bootstrap";

import iconFacebook from "../../../src/images/icon/icons8-facebook-30.png";
import iconInstagram from "../../../src/images/icon/icons8-instagram-24.png";
import iconTwitter from "../../../src/images/icon/icons8-twitter-30.png";
import iconYoutube from "../../../src/images/icon/icons8-youtube-30.png";
const Contact = () => {
  return (
    <div className="d-flex justify-content-center">
      <ListGroup variant="flush" className="m-5" as="ul">
        <ListGroup.Item as="li">Help</ListGroup.Item>
        <ListGroup.Item as="li">FAQs</ListGroup.Item>
        <ListGroup.Item as="li">Delivery</ListGroup.Item>
        <ListGroup.Item as="li">Gift</ListGroup.Item>
      </ListGroup>

      <ListGroup variant="flush" className="m-5" as="ul">
        <ListGroup.Item as="li">Follow US</ListGroup.Item>
        <ListGroup.Item as="li">
          <img src={iconFacebook} alt="" />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <img src={iconInstagram} alt="" />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <img src={iconTwitter} alt="" />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <img src={iconYoutube} alt="" />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Contact;
