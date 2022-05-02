import React from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import Styles1 from "../styles/Rating.module.css";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function Feature() {
  return (
    <div className={getBsClass("col-md-12") + " " + Styles.grid_margin}>
      <div className={Styles1.card1 + " " + Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <h3
            className={getBsClass("card-title mb-3") + " " + Styles.head_card}
          >
            Đánh giá
          </h3>
          <div
            className={getBsClass("d-flex justify-content-between mb-2 pb-2")}
          >
            <div
              className={getBsClass("d-flex align-items-center hover-pointer")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
