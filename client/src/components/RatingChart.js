import { useEffect, useState } from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import style from "../styles/Rating.module.css";
import { useUser } from "../utils/useUser";
import { useToken } from "../utils/useToken";
import { api } from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function Feature() {
  const [token] = useToken();
  const params = useParams();
  const [review, setReview] = useState([]);
  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };
  console.log(params.id);

  const getUserReview = async () => {
    const response = await axios.get(`${api}/review/user/${params.id}`, headers);
    console.log(response.data);
    setReview(response.data.data);
  };
  useEffect(() => {
    getUserReview();
  }, []);
  return (
    <div className={getBsClass("col-md-12") + " " + Styles.grid_margin}>
      <div className={style.card1 + " " + Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <h3 className={getBsClass("card-title mb-3") + " " + Styles.head_card}>Đánh giá</h3>
          <div>
            {review.map((data) => (
              <Comment data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
