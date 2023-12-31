import { useRef } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import Header from "../Layout/Header";
import "./ContactUs.css";

function ContactUs() {
  const nameRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
    };
    async function fetchData() {
      const response = await fetch(
        "https://mail-box-bf43e-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const values = await response.json();
      console.timeLog(values);
    }

    fetchData();

    // const values = await response.json();
    // console.log(values)
  }
  return (
    // <div className="form">
    //   <form onSubmit={submitHandler}>
    //     <label>Name</label>
    //     <input type="text" ref={nameRef}></input>
    //     <label>Email Id</label>
    //     <input type="email" ref={emailInputRef}></input>
    //     <label>Phone</label>
    //     <input type="number" ref={phoneInputRef}></input>
    //     <div>
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
    <div>
      <Header />
      <div>
        <Container style={{ marginLeft: "600px", marginTop: "70px" }}>
          <Row>
            <Col xs={4}>
              <Card className="shadow-lg">
                <Card.Header
                  className="p-3"
                  style={{ backgroundColor: "orange" }}
                >
                  <h3>Contact Us</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        ref={nameRef}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        ref={emailInputRef}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        ref={phoneInputRef}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Button variant="warning" type="submit">
                        Submit
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
