import React, { useState } from "react";
import people from "./DataReview";
import Styles from "../styles/Review.module.css";
import Styles1 from "../styles/Profile.module.css";
import Styles2 from "../styles/Rating.module.css";
import bs from "bootstrap-css-module";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className={getBsClass("col-md-12") + " " + Styles1.grid_margin}>
      <div className={Styles2.card1 + " " + Styles1.rounded}>
        <article className={Styles.review}>
          <div className={Styles.img_container}>
            <img src={image} alt={name} className={Styles.person_img} />
            <span className={Styles.quote_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-right-quote-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM7.194 4.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 0 1-.612.01.405.405 0 0 1-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 0 1-.613.01.405.405 0 0 1-.011-.59c.42-.416.672-.831.81-1.22z" />
              </svg>
            </span>
          </div>
          <h4 className={Styles.author}>{name}</h4>
          <p className={Styles.job}>{job}</p>
          <i className={Styles.info}>"{text}"</i>
          <div className={Styles.btn_container}>
            <button className={Styles.prev_btn} onClick={prevPerson}>
              <img className={Styles.btn_slide} src="/left-arrow.png" />
            </button>
            <button className={Styles.next_btn} onClick={nextPerson}>
              <img className={Styles.btn_slide} src="/right-arrow.png" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Review;
