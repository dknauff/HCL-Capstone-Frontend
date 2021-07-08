import { Form, Container, Row, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const PaymentPage = () => {
  const [redirect, setRedirect] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardErr, setCardErr] = useState(false);

  const deleteCart = async () => {
    await fetch("https://capstone-backend-spring.herokuapp.com/cart/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    }).then(() => {
      setRedirect(true);
    });
  };


  const validator = (e) => {
    e.preventDefault();
    let checkValid = true;
    if (
      cardNumber.length >= 13 &&
      cardNumber.length <= 16 &&
      (cardNumber.startsWith("4") ||
        cardNumber.startsWith("5") ||
        cardNumber.startsWith("6") ||
        cardNumber.startsWith("37"))
    ) {
    } else {
      setCardErr(true);
      checkValid = false;
    }
    if (checkValid) {
      deleteCart();
    }
  };

  if (redirect) {
    return <Redirect to="/purchase" />;
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Fill out your details below to complete your order</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <Form onSubmit={validator}>
            <Form.Group>
              <Form.Control type="text" placeholder="Cardholder Name" />
            </Form.Group>
            <Form.Group></Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Street Address" />
              <Form.Control type="text" placeholder="City" />
              <Form.Control type="text" placeholder="ZIP" />
              <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Enter Card #"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              {cardErr && (
                <span style={{ color: "red" }}>Invalid card number</span>
              )}
              <Form.Control type="password" placeholder="Enter CVV2" />
              <Form.Control type="month" placeholder="Enter Expiry Date" />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button className="btn btn-primary" type="submit">
                Place Order
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentPage;

// import { Form, Container, Row, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const PaymentPage = () => {
//   const [redirect, setRedirect] = useState(false);

//   const deleteCart = async () => {
//     await fetch("http://localhost:8080/cart/delete", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + sessionStorage.getItem("jwt"),
//       },
//     }).then(() => {
//       setRedirect(true);
//     });
//   };

//   const createCart = async () => {
//     await fetch("http://localhost:8080/cart/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + sessionStorage.getItem("jwt"),
//       },
//       body: JSON.stringify({}),
//     });
//   };

//   const validator = (e) => {};
//   return (
//     <div>
//       <Container>
//         <Row className="justify-content-sm-center">
//           <h2>Fill out your details below to complete your order</h2>
//         </Row>
//         <Row className="justify-content-sm-center">
//           <Form onSubmit={validator}>
//             <Form.Group>
//               <Form.Control type="text" placeholder="Cardholder Name" />
//             </Form.Group>
//             <Form.Group></Form.Group>
//             <Form.Group>
//               <Form.Control type="text" placeholder="Street Address" />
//               <Form.Control type="text" placeholder="City" />
//               <Form.Control type="text" placeholder="ZIP" />
//               <Form.Control type="text" placeholder="State" />
//             </Form.Group>
//             <Form.Group>
//               <Form.Control type="password" placeholder="Enter Card #" />
//               <Form.Control type="password" placeholder="Enter CVV2" />
//               <Form.Control type="password" placeholder="Enter Expiry Date" />
//             </Form.Group>
//             <div style={{ textAlign: "center" }}>
//               <Button className="btn btn-primary" type="submit">
//                 Place Order
//               </Button>
//             </div>
//           </Form>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default PaymentPage;
