import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Music Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Thing1</Nav.Link>
            <Nav.Link href="#link">Thing2</Nav.Link>
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
            <Button variant="outline-success">Search</Button>
          </Form>
          <br />
          <Button variant="outline-danger" style={{ float: "left" }}>
            Cart
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
