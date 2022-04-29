import React from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function Feature() {
  return (
    <div className={getBsClass("col-md-12") + " " + Styles.grid_margin}>
      <div className={Styles.card + " " + Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <h3
            className={getBsClass("card-title mb-3") + " " + Styles.head_card}
          >
            Ảnh nổi bật
          </h3>
          <div className={Styles.latest_photos}>
            <div className={getBsClass("row")}>
              <div className={getBsClass("col-lg-4")} data-gallery="gallery">
                <figure>
                  <img
                    className={getBsClass("img-fluid rounded")}
                    src="./IMG_2034.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure>
                  <img
                    className={getBsClass("img-fluid rounded")}
                    src="./IMG_2063.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure>
                  <img
                    className={
                      getBsClass("img-fluid rounded") + " " + Styles.rounded
                    }
                    src="./IMG_3225.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure>
                  <img
                    className={getBsClass("img-fluid") + " " + Styles.rounded}
                    src="./img4.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure>
                  <img
                    className={getBsClass("img-fluid") + " " + Styles.rounded}
                    src="./IMG_2070.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure>
                  <img
                    className={getBsClass("img-fluid") + " " + Styles.rounded}
                    src="./IMG_3151.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure className={getBsClass("mb-0")}>
                  <img
                    className={getBsClass("img-fluid") + " " + Styles.rounded}
                    src="./IMG_3146.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure className={getBsClass("mb-0")}>
                  <img
                    className={getBsClass("img-fluid") + " " + Styles.rounded}
                    src="./IMG_2879.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className={getBsClass("col-lg-4")}>
                <figure className={getBsClass("mb-0")}>
                  <img
                    className={getBsClass("img-fluid") + " " + Styles.rounded}
                    src="./IMG_2908.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
