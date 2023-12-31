import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
