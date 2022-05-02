import React from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function Infor() {
  return (
    <div className={getBsClass("col-md-12") + " " + Styles.grid_margin}>
      <div className={Styles.card + " " + Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <div className={getBsClass("flex align-items-center justify-content-between mb-2")}>
            <h3 className={getBsClass("card-title mb-3") + " " + Styles.head_card}>Giới thiệu</h3>
          </div>
          <div className={getBsClass("mt-3")}>
            <EmailSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              Email:
            </label>
            <p className={getBsClass("text-muted")}>
              MTP@gmail.com
              <button className={getBsClass("btn btn-link shadow-none")}>
                <BorderColorSharpIcon />
              </button>
            </p>
          </div>

          <div className={getBsClass("mt-3")}>
            <HomeSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              Địa chỉ:
            </label>
            <p className={getBsClass("text-muted")}>
              Hà Nội, Việt Nam
              <button className={getBsClass("btn btn-link shadow-none")}>
                <BorderColorSharpIcon />
              </button>
            </p>
          </div>
          <div className={getBsClass("mt-3")}>
            <LocalPhoneSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>SĐT:</label>
            <p className={getBsClass("text-muted")}>
              0123456789
              <button className={getBsClass("btn btn-link shadow-none")}>
                <BorderColorSharpIcon />
              </button>
            </p>
          </div>
          <div className={getBsClass("mt-3")}>
            <CalendarMonthSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              Nơi ở:
            </label>
            <p className={getBsClass("text-muted")}>
              Somewhere
              <button className={getBsClass("btn btn-link shadow-none")}>
                <BorderColorSharpIcon />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
