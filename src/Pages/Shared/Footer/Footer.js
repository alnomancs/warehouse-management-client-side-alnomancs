import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border border-2">
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
      Copyright © {new Date().getFullYear()} PULLANDBEAR.COM
    </div>
  );
};

export default Footer;
