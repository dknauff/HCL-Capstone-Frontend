import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPageJumbo = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "" }}>
        <h1>Hi-5</h1>
        <p>Your one-stop-shop for musical instruments</p>
        <p>
          <Button variant="primary">
            <Link to="/login" style={{ color: "white" }}>
              Login/Register
            </Link>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MainPageJumbo;
