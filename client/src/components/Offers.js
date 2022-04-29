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

export default function Offers() {
  return (
    <div className={getBsClass("col-md-12")+" "+ Styles.grid_margin}>
      <div className={Styles.card +" "+ Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <h3 className={getBsClass("card-title mb-3") +" "+Styles.head_card}>Kĩ năng</h3>
          
          <div
            className={getBsClass("d-flex justify-content-between mb-2 pb-2 border-bottom")}
          >
            <div
              className={getBsClass("d-flex align-items-center hover-pointer")}
            >
              <img
                className={Styles.img_xs + " " + Styles.rounded_circle}
                src="./electrical.png"
                alt=""
              />
              <div className={getBsClass("ml-2")}>
                <p>
                  Kĩ sư điện
                  <button className={getBsClass("btn btn-link shadow-none")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </p>
                <p className={getBsClass("tx-11 text-muted")}>Đã làm 40 giờ</p>
              </div>
            </div>
          </div>
          <div
            className={getBsClass(
              "d-flex justify-content-between mb-2 pb-2 border-bottom"
            )}
          >
            <div
              className={getBsClass("d-flex align-items-center hover-pointer")}
            >
              <img
                className={Styles.img_xs + " " + Styles.rounded_circle}
                src="./delivery.png"
                alt=""
              />
              <div className={getBsClass("ml-2")}>
                <p>
                  Bê vác, chuyển đồ
                  <button className={getBsClass("btn btn-link shadow-none")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </p>
                <p className={getBsClass("tx-11 text-muted")}>Đã làm 44 giờ</p>
              </div>
            </div>
          </div>
          <div
            className={getBsClass(
              "d-flex justify-content-between mb-2 pb-2 border-bottom"
            )}
          >
            <div
              className={getBsClass("d-flex align-items-center hover-pointer")}
            >
              <img
                className={Styles.img_xs + " " + Styles.rounded_circle}
                src="./shipper.png"
                alt=""
              />
              <div className={getBsClass("ml-2")}>
                <p>
                  Shipper
                  <button className={getBsClass("btn btn-link shadow-none")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </p>
                <p className={getBsClass("tx-11 text-muted")}>Đã làm 6 giờ</p>
              </div>
            </div>
          </div>
          <div className={getBsClass("d-flex justify-content-between")}>
            <div
              className={getBsClass("d-flex align-items-center hover-pointer")}
            >
              <div className={getBsClass("ml-2")}>
                <button
                  className={getBsClass(
                    "btn btn-primary btn-icon-text btn-edit-profile"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    // class="bi bi-plus"
                    viewBox="3 1 17 17"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  Thêm kĩ năng/Chuyên môn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
