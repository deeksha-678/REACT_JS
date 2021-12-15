import React from "react";

const AuthButton = props => {
  let { isLoggedIn } = props;

  return isLoggedIn ? <button>Logout</button> : <button>Login</button>;
};

export default AuthButton;