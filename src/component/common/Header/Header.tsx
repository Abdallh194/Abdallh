import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav>
          <NavLink
            to="mailto:AbdallhSabry194@gmail.com"
            className="hire-me d-mobile-view"
          >
            Hire Me
          </NavLink>
        </Nav>
        <Link to="/" className="logo">
          <img
            src="./logo.webp"
            className="img-fluid"
            loading="lazy"
            alt="Abdallh sabry"
          />
          A<span> . S . </span> R
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link href="#Home" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="#AboutMe" className="link">
              About Me
            </Nav.Link>
            <Nav.Link href="#Blog" className="link">
              Blog
            </Nav.Link>
            <Nav.Link href="#Skills" className="link">
              Skills
            </Nav.Link>
            <Nav.Link href="#Contact" className="link">
              Contact Me
            </Nav.Link>
          </Nav>
          <Nav>
            <NavLink to="mailto:AbdallhSabry194@gmail.com" className="hire-me">
              Hire Me
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
