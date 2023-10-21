import React from "react";
import NavbarCss from "./style.module.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <img src="../" alt="" />
      <div className={NavbarCss.container}>
        <Link to={"/"} className={NavbarCss.logo}>
          <img src="assets/logo.png" alt="LOGO" />
          <span>amazon</span>
        </Link>
        <div className={NavbarCss.right}>
          <div className={NavbarCss.menu}>
            <ul>
              <li>
                <Link to={"/hero"}>Collections</Link>
              </li>
              <li>
                <Link to={"/"}>Brands</Link>
              </li>
              <li>
                <Link to={"/"}>New</Link>
              </li>
              <li>
                <Link to={"/login"}>Sign in</Link>
              </li>
              <li>
                <Link to={"/register"}>Sign up</Link>
              </li>
            </ul>
          </div>
          <input
            type="text"
            className={NavbarCss.search}
            placeholder="Search"
          />
          <BsCart4 className={NavbarCss.cart} />
        </div>
      </div>
    </>
  );
}
