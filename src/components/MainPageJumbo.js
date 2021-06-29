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
            <Link to="/users/register" style={{ color: "white" }}>
              Get Started
            </Link>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MainPageJumbo;
