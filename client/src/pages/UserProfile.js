import React from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import Infor from "../components/Infor";
import Offers from "../components/Offers";
import Review from "../components/Review";
import Rating from "../components/RatingChart";
import JobBar from "../components/JobBar";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function UserProfile() {
  return (
    <div className={Styles.main_container}>
      <div className={getBsClass("container")}>
        <div className={Styles.profile_page + " " + getBsClass("tx-13")}>
          <div className={getBsClass("row")}>
            <div className={getBsClass("col-12") + " " + Styles.grid_margin}>
              <div className={Styles.profile_header}>
                <div className={Styles.cover}>
                  <img className={Styles.cover_photo} src="/cover1.png" />
                  <div
                    className={
                      Styles.cover_body +
                      " " +
                      getBsClass("d-flex justify-content-between align-items-center")
                    }
                  >
                    <div>
                      <img
                        className={Styles.profile_pic}
                        src="https://therichpost.com/wp-content/uploads/2021/03/avatar1.png"
                        alt="profile"
                      />
                      <span className={Styles.profile_name}>
                        M-TP
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
                      </span>
                    </div>
                  </div>
                </div>
                <div className={Styles.header_links}>
                  <div className={getBsClass("row")}>
                    <div className={getBsClass("col- col-lg-3")}>
                      <div className={getBsClass("count-data text-center")}>
                        <h6 className={getBsClass("count h2")} data-to="500" data-speed="500">
                          50
                        </h6>
                        <p className={getBsClass("m-0px font-w-600")}>Lượt đánh giá tích cực</p>
                      </div>
                    </div>
                    <div className={getBsClass("col-6 col-lg-3")}>
                      <div className={getBsClass("count-data text-center")}>
                        <h6 className={getBsClass("count h2")}>20</h6>
                        <p className={getBsClass("m-0px font-w-600")}>Công việc đã hoàn thành</p>
                      </div>
                    </div>
                    <div className={getBsClass("col-6 col-lg-3")}>
                      <div className={getBsClass("count-data text-center")}>
                        <h6 className={getBsClass("count h2")}>90h</h6>
                        <p className={getBsClass("m-0px font-w-600")}>Làm việc</p>
                      </div>
                    </div>
                    <div className={getBsClass("col-6 col-lg-3")}>
                      <div className={getBsClass("count-data text-center")}>
                        <h6 className={getBsClass("count h2")}>100</h6>
                        <p className={getBsClass("m-0px font-w-600")}>Lượt liên hệ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={getBsClass("row") + " " + Styles.profilebody}>
            <div className={getBsClass("d-none d-md-block col-md-5 col-xl-4 left-wrapper")}>
              <Infor />
              <Offers />
            </div>
            <div className={getBsClass("col-md-8 col-xl-8 right-wrapper")}>
              {/* <Review /> */}
              <b style={{ fontSize: "25px" }}>Những công việc mà bạn đã tạo</b>
              <JobBar />
              <hr />
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
