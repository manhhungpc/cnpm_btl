import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import styles from "../styles/ReviewCard.module.css";
import Comment from "./Comment";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useParams, useLocation } from "react-router-dom";
import { useUser } from "../utils/useUser";

export default function ReviewCard({ owner }) {
  const [rate, setRate] = useState(3);
  const [review, setReview] = useState("");
  const [pleasure, setPleasure] = useState(true);
  const [comments, setComments] = useState([]);
  const { pathname } = useLocation();
  const [token] = useToken();
  const user = useUser();

  const target = pathname.split("/")[1] + " " + pathname.split("/")[2];
  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const getJobComment = async () => {
    if (target.split(" ")[0] === "job") {
      const dataJob = await axios.get(`${api}/review${pathname}`, headers);
      setComments(dataJob.data.data);
    }
  };

  const onSubmitComment = async () => {
    const data = {
      review: review,
      target,
      stars: rate,
      pleasure,
      user_id: user.id,
    };

    await axios.post(`${api}/review${pathname}`, data, headers);
    getJobComment();
  };

  useEffect(() => {
    getJobComment();
  }, []);

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          {!owner ? (
            <>
              <h3>Viết đánh giá:</h3>
              <span>Bình luận: </span>
              <TextField
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                size="small"
                onChange={(e) => setReview(e.target.value)}
              />
              <div className={styles.rating}>
                <span>Đánh giá: </span>
                <Rating
                  value={rate}
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                />
              </div>
              <div className={styles.pleasure}>
                <span>Bạn có hài lòng không?</span>
                <Button
                  variant={pleasure ? "contained" : "outlined"}
                  size="small"
                  onClick={(e) => setPleasure(true)}
                >
                  Có
                </Button>
                <Button
                  variant={!pleasure ? "contained" : "outlined"}
                  size="small"
                  onClick={(e) => setPleasure(false)}
                >
                  Không
                </Button>
              </div>
              <div className={styles.sendBtn}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmitComment}>
                  Gửi
                </Button>
              </div>
            </>
          ) : (
            ""
          )}
          <hr />
          {comments.map((data) => (
            <Comment data={data} />
          ))}
        </CardContent>
      </Card>
    </>
  );
}
