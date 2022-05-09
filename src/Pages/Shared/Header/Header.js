import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        className="text-center"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            PULL AND BEER WAREHOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/inventory">
                Manage Inventoy
              </Nav.Link> */}
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/inventory">
                    Manage Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/inventory/additem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/inventory/myitem">
                    My Item
                  </Nav.Link>
                  <Nav.Link as={Link} to=""></Nav.Link>

                  <button className="btn btn-link text-white text-decoration-none">
                    <span>{user.displayName}</span>
                  </button>

                  <button
                    className="btn btn-link text-white text-decoration-none"
                    onClick={handleSignOut}
                  >
                    sign out
                  </button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
