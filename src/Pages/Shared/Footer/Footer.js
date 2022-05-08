import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import iconFacebook from "../../../images/icon/icons8-facebook-30.png";
import iconInstagram from "../../../images/icon/icons8-instagram-24.png";
import iconTwitter from "../../../images/icon/icons8-twitter-30.png";
import iconYoutube from "../../../images/icon/icons8-youtube-30.png";

const Footer = () => {
  return (
    <div className="border border-2">
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
      <Nav className="justify-content-center text-black">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            <p className="text-black">Privacy Policy</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            <p className="text-black">Cookie Policy</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            <p className="text-black">PORTUGAL | ENGLISH</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Footer;
