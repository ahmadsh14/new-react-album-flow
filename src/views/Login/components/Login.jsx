import React, { Fragment, useState } from "react";
import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const verifiedUser = await AuthService.login(email);

      if (!verifiedUser) {
        setError("Invalid Credentials!");
      } else {
        navigate('/albums');
      }
    } catch (error) {
      setError("Something went wrong.");
    }
  };
  return (
    <Fragment>
      <div className={classes.mainAll}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="jane@example.com"
            className={classes.emailInput}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="*********"
            className={classes.passInput}
          />
          <p id="error1"></p>
          <input type="submit" value="Log in" className={classes.btn} />
          {error && <div className={classes.error1}>{error}</div>}
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
