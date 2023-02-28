import React, { Fragment, useState, useEffect} from "react";
// import { UserContext } from "../Album_page/UserContext";
import classes from "./login.module.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [userMailInput, setuserMailInput] = useState("");

  return (
    <Fragment>
      <div className={classes.mainAll}>
        <h1>Log In</h1>
        <form >
          <input
            type="email"
            placeholder="jane@example.com"
            className={classes.emailInput}
            
          />
          <input
            type="password"
            placeholder="*********"
            className={classes.passInput}
          />
          <p id="error1"></p>
          <input type="submit" value="Log in" className={classes.btn} />
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
