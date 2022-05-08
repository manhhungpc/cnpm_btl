import { useEffect, useState } from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import Infor from "../components/Infor";
import Offers from "../components/Offers";
import Review from "../components/Review";
import Rating from "../components/RatingChart";
import JobBar from "../components/JobBar";
import { useUser } from "../utils/useUser";
import { useToken } from "../utils/useToken";
import { api } from "../utils/api";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function UserProfile() {
  const user = useUser();
  const [token] = useToken();
  const [jobs, setJobs] = useState([]);
  const [info, setInfo] = useState({});
  const [skill, setSkill] = useState([]);
  const params = useParams();

  console.log(user.id);
  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };
  const getJobByUserId = async () => {
    const jobs = await axios.get(`${api}/job/user/${params.id}`, headers);
    setJobs(jobs.data.data);
  };

  const getUserInfo = async () => {
    const userInfo = await axios.get(`${api}/user/profile/${params.id}`, headers);
    setSkill(JSON.parse(userInfo.data.data.skills));
    // userInfo.data.data.skills = JSON.parse(userInfo.data.data.skills);
    setInfo(userInfo.data.data);
  };
  useEffect(() => {
    getJobByUserId();
    getUserInfo();
  }, []);

  return (
    <>
      <Navbar />
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
                          {user.name}
                          {/* <button className={getBsClass("btn btn-link shadow-none")}>
                            <BorderColorSharpIcon />
                          </button> */}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className={Styles.header_links}>
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className={getBsClass("row") + " " + Styles.profilebody}>
              <div className={getBsClass("d-none d-md-block col-md-5 col-xl-4 left-wrapper")}>
                <Infor info={info} params={params} />

                <Offers info={info} skill={skill} params={params} />
              </div>
              <div className={getBsClass("col-md-8 col-xl-8 right-wrapper")}>
                {/* <Review /> */}
                <b style={{ fontSize: "25px" }}>
                  Những công việc mà {user.id === params.id ? "bạn" : "người này"} đã tạo
                </b>
                {jobs.map((data) => (
                  <JobBar data={data} />
                ))}
                <hr />
                <ReviewCard owner={params.id === user.id ? true : false} />
                {/* <Rating /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
