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
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
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

            <NavDropdown title="Shop By Department" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Drums and Percussion <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Guitars <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Amplifiers <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Keyboards <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Microphones
                <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Accessories
                <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Recording</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">Media</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Sale</Nav.Link>
          </Nav>
          <Form inline>

            <FormControl
              type="text"
              placeholder="Enter keyword or item #"
              className="mr-sm-1"
            />
            <Button variant="success">
              <AiOutlineSearch />
            </Button>
          </Form>
          <br />
          <Button variant="danger" style={{ float: "left" }}>
            <AiOutlineShoppingCart />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
