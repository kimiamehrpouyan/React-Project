import React from "react";
import HeroCss from "./style.module.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <div className={HeroCss.container}>
        <div className={HeroCss.leftSide}>
          <span className={HeroCss.leftSideTop}>
            skin <br />
            protection <br />
            cream
          </span>
          <div className={HeroCss.leftSideBottom}>
            <span>
              Trendy <br />
              Collection
            </span>
            <span>
              Seedily say has suitable disposal and boy. Exercise joy man
              children rejoiced.
            </span>
          </div>
        </div>

        <div className={HeroCss.middleSide}>
          <div className={HeroCss.blueCircle}></div>
          <img src="assets/hero.png" alt="Hero" />
          <div className={HeroCss.middleCart}>
            <div className={HeroCss.cart}>
              <RiShoppingBagFill />
            </div>
            <div className={HeroCss.signUp}>
              <span>Best SignUp Offers</span>
              <div className={HeroCss.arrowIcon}>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className={HeroCss.rightSide}>
          <div className={HeroCss.traffic}>
            <span>1.5m</span>
            <span>Monthly traffic</span>
          </div>
          <div className={HeroCss.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
    </>
  );
}
