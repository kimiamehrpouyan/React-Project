import React from "react";
import LoginCss from "./style.module.css";
import { Link } from "react-router-dom";
import useFormFields from "../../utils/useFormFields";

export default function Login({ handleLogin }) {
  const [fields, handleChange] = useFormFields();
  const submit = (e) => {
    e.preventDefault();
    if (fields) {
      fetch(
        `http://localhost:3001/users?username=${fields.username}&password=${fields.password}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            handleLogin();
          } else {
            console.log("failed");
          }
        });
    }
  };
  return (
    <>
      <div className={LoginCss.wrapper}>
        <div className={LoginCss.container}>
          <span>Sign in</span>
          <form method="post">
            <div className={LoginCss.txtField}>
              <label>Username :</label>
              <input
                onChange={handleChange}
                value={fields.username}
                name="username"
                type="text"
                required
              />
            </div>
            <div className={LoginCss.txtField}>
              <label>Password :</label>
              <input
                onChange={handleChange}
                value={fields.password}
                name="password"
                type="password"
                required
              />
            </div>
            <button onClick={submit}>Sign in</button>
            <div className={LoginCss.signup}>
              Not a member?
              <Link to={"/register"} className={LoginCss.signupButton}>
                {" "}
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
