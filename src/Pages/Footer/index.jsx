import React from "react";
import FooterCss from "./style.module.css";
import {
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineInbox,
  HiOutlineLogin,
  HiOutlineUsers,
  HiOutlineLink,
} from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className={FooterCss.wrapper}>
        <hr />
        <div className={FooterCss.container}>
          <div className={FooterCss.logo}>
            <img src="assets/logo.png" alt="LOGO" />
            <span>amazon</span>
          </div>
          <div className={FooterCss.details}>
            <span>Contact Us</span>
            <div className={FooterCss.pngLine}>
              <HiOutlineLocationMarker className={FooterCss.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </div>
            <div className={FooterCss.pngLine}>
              <HiOutlinePhone className={FooterCss.icon} />
              <span>352-306-4415</span>
            </div>
            <div className={FooterCss.pngLine}>
              <HiOutlineInbox className={FooterCss.icon} />
              <span>support@amazon.com</span>
            </div>
          </div>
          <div className={FooterCss.details}>
            <span>Account</span>
            <div className={FooterCss.pngLine}>
              <HiOutlineLogin className={FooterCss.icon} />
              <Link to={"/login"}>Sign In</Link>
            </div>
          </div>
          <div className={FooterCss.details}>
            <span>Company</span>
            <div className={FooterCss.pngLine}>
              <HiOutlineUsers className={FooterCss.icon} />
              <span>About us</span>
            </div>
          </div>
          <div className={FooterCss.details}>
            <span>Resources</span>
            <div className={FooterCss.pngLine}>
              <HiOutlineLink className={FooterCss.icon} />
              <span>Safety Privacy & Terms</span>
            </div>
          </div>
        </div>
        <div className={FooterCss.copyRight}>
          <span>Copyright &copy;2022 by Amazon, Inc.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </>
  );
}
