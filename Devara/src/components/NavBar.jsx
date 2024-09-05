import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import devaralogo from "../assets/devaralogo.png";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" fixed="top">
      <Navbar.Brand href="/" className="brand">
        <img src={devaralogo} alt="logo" className="navlogo" />
      </Navbar.Brand>
      <Navbar.Toggle
        className="cheeseburger"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">About</Nav.Link>
          <Nav.Link href="/contactus">Contact</Nav.Link>
          <Nav.Link href="/mortgagecalculator">Mortgage Calculator</Nav.Link>
          <Nav.Link
            href="https://www.facebook.com/devarasoftware"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/orbel_the_loan_officer/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
