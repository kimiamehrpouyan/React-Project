import React from "react";
import VirtualCss from "./style.module.css";
import ReactCompareImage from "react-compare-image";

export default function Virtual() {
  return (
    <>
      <div className={VirtualCss.virtual}>
        <div className={VirtualCss.leftSide}>
          <span>Virtual try-on</span>
          <span>Never buy the wrong shade again!</span>
          <span>Try now!</span>
          <img src="assets/shade.png" alt="" />
        </div>
        <div className={VirtualCss.rightSide}>
          <div className={VirtualCss.wrapper}>
            <ReactCompareImage
              leftImage="assets/before.png"
              rightImage="assets/after.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
