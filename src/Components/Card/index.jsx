import React from "react";
import CardCss from "./style.module.css";

export default function Card({ name, detail, price, img }) {
  return (
    <>
      <div className={CardCss.container}>
        <div className={CardCss.leftSide}>
          <div className={CardCss.name}>
            <span>{name}</span>
            <span>{detail}</span>
          </div>
          <span>{price}$</span>
          <div>Shop Now</div>
        </div>
        <img src={img} alt="product" />
      </div>
    </>
  );
}
