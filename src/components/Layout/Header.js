import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import cartContext from "../../strore/cart-context";

import classes from "./Header.module.css";
import AuthContext from "../../strore/auth-context";

const Header = ({ onShow }) => {
  const CartCtx = useContext(cartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLogin;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/");
  };

  const numberOfCartItems = CartCtx.products.reduce((currNum, product) => {
    return currNum + product.quantity;
  }, 0);
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.list}>
          <h4>
            <NavLink
              to={isLoggedIn ? "/home" : "/"}
              activeclassName={classes.active}
            >
              HOME
            </NavLink>
          </h4>

          <h4>
            <NavLink
              to={isLoggedIn ? "/store" : "/"}
              activeclassName={classes.active}
            >
              STORE
            </NavLink>
          </h4>

          <h4>
            <NavLink
              to={isLoggedIn ? "/about" : "/"}
              activeclassName={classes.active}
            >
              ABOUT
            </NavLink>
          </h4>

          <h4>
            <NavLink
              to={isLoggedIn ? "/contact" : "/"}
              activeclassName={classes.active}
            >
              ContactUs
            </NavLink>
          </h4>

          {!isLoggedIn && (
            <div className={classes.button2}>
              <Button variant="outline-info" bg="dark" onClick={loginHandler}>
                login
              </Button>
            </div>
          )}
        </div>

        {isLoggedIn && (
          <div className={classes.button1}>
            <Button variant="outline-info" bg="dark" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        )}

        <div className={classes.button}>
          <Button variant="outline-info" bg="dark" onClick={onShow}>
            Cart
          </Button>
          <p>{numberOfCartItems}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
