import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { TiCog, TiInfoOutline, TiUser, TiPower, TiHeart } from "react-icons/ti";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="col-lg-12 col-12  fixed-top d-flex flex-row"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo me-5">
          <Image
            src={require("../../assets/img/logo/nextdash.png")}
            className=""
            alt="logo"
            width={100}
            height={25}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Configurações" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
