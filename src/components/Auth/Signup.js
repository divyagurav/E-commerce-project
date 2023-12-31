import { useContext, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../strore/auth-context";
import Header from "../Layout/Header";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  //const confirmPasswordRef = useRef();

  const switchHandler = (e) => {
    e.preventDefault();
    setIsLogin((prevState) => !prevState);
  };

  //const confirmPasword = confirmPasswordRef.current.value;
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNA3qmss2F3JtKaPtOkiDm1p5SUqvXCpY",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            authCtx.login(data.idToken);
          });

          navigate("/store");
          alert("login success");
        } else {
          alert("login failed");
        }
      });
    } else {
      //   if (password !== confirmPasword) {
      //     alert("Incorrect password");
      //   }
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNA3qmss2F3JtKaPtOkiDm1p5SUqvXCpY",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          alert("signup success");
        } else {
          alert("signup failed");
        }
      });
    }
  };
  return (
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
                  <h3> {!isLogin ? "SignUp" : "Login"}</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        ref={emailRef}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="password"
                        ref={passwordRef}
                      ></Form.Control>
                    </Form.Group>
                    {!isLogin && (
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="confirm Password"
                          //  ref={confirmPasswordRef}
                        ></Form.Control>
                      </Form.Group>
                    )}
                    <Form.Group className="mb-3">
                      <Button variant="warning" type="submit">
                        {isLogin ? "Login" : "Create Account"}
                      </Button>
                    </Form.Group>
                  </Form>
                  <Button
                    variant="warning"
                    type="submit"
                    onClick={switchHandler}
                  >
                    {isLogin
                      ? "create New Account"
                      : "Login With existing account"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Signup;
