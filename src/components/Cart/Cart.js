import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col, Figure } from "react-bootstrap";
import "./Cart.css";
import { useContext } from "react";
import cartContext from "../../strore/cart-context";

function Cart(props) {
  const cartCtx = useContext(cartContext);

  const totalPrice = cartCtx.totalAmount;
  //   const cartElements = [
  //     {
  //       title: "Colors",

  //       price: 100,

  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

  //       quantity: 2,
  //     },

  //     {
  //       title: "Black and white Colors",

  //       price: 50,

  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

  //       quantity: 3,
  //     },

  //     {
  //       title: "Yellow and Black Colors",

  //       price: 70,

  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

  //       quantity: 1,
  //     },
  //   ];

  const removehandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <div className="cart">
      <Card border="light" style={{ width: "28rem" }}>
        {/* <Container className="d-flex justify-content-between"> */}
        <Card.Header>CART</Card.Header>

        {/* </Container> */}
        <Card.Body>
          <Container fluid id="productList">
            <Row>
              <Col className="border-bottom">Title</Col>
              <Col className="border-bottom">Price</Col>
              <Col className="border-bottom">Quantity</Col>
            </Row>
            {cartCtx.products.map((item) => {
              return (
                <Row key={item.title} className="border-bottom">
                  <Col className="col-2">
                    <Figure>
                      <Figure.Image
                        height={50}
                        width={50}
                        src={item.imageUrl}
                        alt="color"
                      />
                    </Figure>
                  </Col>
                  <Col className="col-2">
                    <span>{item.title}</span>
                  </Col>
                  <Col className="col-4">
                    <span>{item.price}</span>
                  </Col>
                  <Col className="col-2">
                    <span>x{item.quantity}</span>
                  </Col>
                  <Col className="col-2">
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={removehandler.bind(null, item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </Card.Body>
        <Container className="cart-items">
          <span>Total Amount ${totalPrice}</span>
          <Button variant="dark">PURCHASE</Button>
          <Button variant="outline-danger" onClick={props.onHide}>
            CLOSE
          </Button>
        </Container>
      </Card>
    </div>
  );
}

export default Cart;
