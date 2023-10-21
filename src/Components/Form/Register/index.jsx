import React from "react";
import RegisterCss from "./style.module.css";
import { Link } from "react-router-dom";
import useFormFields from "../../utils/useFormFields";

export default function Register({ handleLogin }) {
  const [fields, handleChange] = useFormFields();
  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: fields.username,
        password: fields.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    handleLogin();
  };
  return (
    <>
      <div className={RegisterCss.wrapper}>
        <div className={RegisterCss.container}>
          <span>Sign up</span>
          <form method="post">
            <div className={RegisterCss.txtField}>
              <label>Username :</label>
              <input
                onChange={handleChange}
                value={fields.username}
                name="username"
                type="text"
                required
              />
            </div>
            <div className={RegisterCss.txtField}>
              <label>Password :</label>
              <input
                onChange={handleChange}
                value={fields.password}
                name="password"
                type="password"
                required
              />
            </div>
            <button onClick={submit}>Sign up</button>
            <div className={RegisterCss.signup}>
              Not a member?
              <Link to={"/login"} className={RegisterCss.signupButton}>
                {" "}
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
