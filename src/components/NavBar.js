import { Link } from "react-router-dom";

import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Nav.Link>
            <Link to="/">Music Shop</Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users/login">Login</Link>
            </Nav.Link>
            <NavDropdown title="More Things" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Thing3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Thing4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thing5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Thing6</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success">
              <AiOutlineSearch />
            </Button>
          </Form>
          <br />
          <Button variant="danger">
            <Badge>5</Badge>
            <AiOutlineShoppingCart />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
