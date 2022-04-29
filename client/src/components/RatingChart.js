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
        <div className={getBsClass("container-fluid px-1 py-5 mx-auto")}>
          <div className={getBsClass("row justify-content-center")}>
            <div
              className={getBsClass("col-lg-15 col-md-10")}
            >
              {/* <div className={Styles1.card1}> */}
              <div className={Styles1.circle_img}>
                {" "}
                <img
                  src="https://i.imgur.com/IRsUTtE.jpg"
                  style={{
                    top: "-126px",
                    position: "relative",
                    width: "170px",
                    height: "170px",
                    borderRadius: "100%",
                    border: "10px solid #fff",
                    zIndex: "1",
                    left: "22.5%",
                  }}
                />
                <div className={Styles1.rating_on_img}>
                  <h3 className={Styles1.head_rate}>4.5</h3>
                  <h3 className={Styles1.subhead_rate +" "+ getBsClass("text-center")}>trên 5</h3>
                </div>
              </div>
              <div
                className={
                  getBsClass("mb-3 text-center") + " " + Styles1.heading0
                }
              >
                <h3 className={Styles1.head_card}>Đánh giá</h3>
              </div>
              <div className={getBsClass("justify-content-center")}>
                <table className={getBsClass("text-left mx-auto")}>
                  <tr>
                    <t className={Styles1.rating_label}>Tuyệt vời</t>
                    <td className={Styles1.rating_bar}>
                      <div className={Styles1.bar_container}>
                        <div className={Styles1.bar_5}></div>
                      </div>
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td className={Styles1.rating_label}>Rất Tốt</td>
                    <td className={Styles1.rating_bar}>
                      <div className={Styles1.bar_container}>
                        <div className={Styles1.bar_4}></div>
                      </div>
                    </td>
                    <td className={getBsClass("text-center")}>10</td>

                  </tr>
                  <tr>
                    <td className={Styles1.rating_label}>Hài lòng</td>
                    <td className={Styles1.rating_bar}>
                      <div className={Styles1.bar_container}>
                        <div className={Styles1.bar_3}></div>
                      </div>
                    </td>
                    <td className={getBsClass("text-center")}>10</td>
                  </tr>
                  <tr>
                    <td className={Styles1.rating_label}>Không hài lòng</td>
                    <td className={Styles1.rating_bar}>
                      <div className={Styles1.bar_container}>
                        <div className={Styles1.bar_2}></div>
                      </div>
                    </td>
                    <td className={getBsClass("text-center")}>0</td>
                  </tr>
                  <tr>
                    <td className={Styles1.rating_label}>Rất kém</td>
                    <td className={Styles1.rating_bar}>
                      <div className={Styles1.bar_container}>
                        <div className={Styles1.bar_1}></div>
                      </div>
                    </td>
                    <td className={getBsClass("text-center")}>0</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
