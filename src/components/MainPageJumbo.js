import { Jumbotron, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPageJumbo = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#b4ecb4" }}>
        <h1>Hi-5</h1>
        <p>Your one-stop-shop for musical instruments</p>
        <p>
          {sessionStorage.getItem("jwt") === null && (
            <Button variant="primary">
              <Link to="/login" style={{ color: "white" }}>
                Login/Register
              </Link>
            </Button>
          )}
        </p>
      </Jumbotron>
      <section class="rockNRoll">
        <Image
          src="rock.png"
          alt="Some rock n roll stuff"
          height="600"
          width="100%"
          fluid
        />
      </section>
    </div>
  );
};

export default MainPageJumbo;
