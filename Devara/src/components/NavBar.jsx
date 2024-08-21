import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" fixed="top">
      <Navbar.Brand href="/" className="brand">
        DEVARA
      </Navbar.Brand>
      <Navbar.Toggle
        className="cheeseburger"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">About Me</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          <Nav.Link
            href="https://www.facebook.com/Orbeltheloanofficer"
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
