import React from "react";
import styles from "../styles/Slider_cover.module.css";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      // className={direction === "next" ? "Slider_cover_next__rtj2C" : "Slider_cover_prev__hqL9S"}
      className={styles.btn_slide + " " + (direction === "next" ? styles.next : styles.prev)}
    >
      <img
        src={
          direction === "next"
            ? process.env.PUBLIC_URL + "right_arrow.png"
            : process.env.PUBLIC_URL + "left_arrow.png"
        }
      />
    </button>
  );
}
