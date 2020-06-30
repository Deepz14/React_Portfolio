import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

export const NavbarSection = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        style={{ backgroundColor: "#5390D9" }}
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon
              icon={faIndustry}
              style={{ color: "primary" }}
              size="3x"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-pages">
              <Nav.Link as={Link} to="/">
                {/* <Link to="/" className="nav-items"> */}
                Home
                {/* </Link> */}
              </Nav.Link>

              <Nav.Link as={Link} to="/portfolio">
                {/* <Link to="/portfolio" className="nav-items"> */}
                Portfolio
                {/* </Link> */}
              </Nav.Link>
              <NavDropdown
                title="Services"
                className="nav-items"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/webdesigning">
                  {/* <Link to="/webdesigning" className="nav-dropitem"> */}
                  WebDesigning
                  {/* </Link> */}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/webdevelopment">
                  {/* <Link to="/webdevelopment" className="nav-dropitem"> */}
                  WebDevelopment
                  {/* </Link> */}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/seoservices">
                  {/* <Link to="/seoservices" className="nav-dropitem"> */}
                  SeoServices
                  {/* </Link> */}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mobileapp">
                  {/* <Link to="/seoservices" className="nav-dropitem"> */}
                  Mobileapp
                  {/* </Link> */}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/softwaredevelopment">
                  {/* <Link to="/seoservices" className="nav-dropitem"> */}
                  SoftwareDevelopment
                  {/* </Link> */}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/graphicdesign">
                  {/* <Link to="/graphicdesign" className="nav-dropitem"> */}
                  Graphicdesign
                  {/* </Link> */}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">
                {/* <Link to="/about" className="nav-items"> */}
                About us
                {/* </Link> */}
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                {/* <Link to="/contact" className="nav-items"> */}
                Contact us
                {/* </Link> */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav>
          <Nav.Link as={Link} to="/logout" className="nav-items">
            Logout
          </Nav.Link>

          <Nav.Link as={Link} to="/myaccount" className="nav-items">
            My Account
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
