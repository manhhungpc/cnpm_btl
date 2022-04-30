import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import styles from "../styles/ReviewCard.module.css";
import Comment from "./Comment";

export default function ReviewCard({ owner }) {
  const [value, setValue] = React.useState(3);
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          {!owner ? (
            <>
              <h3>Viết đánh giá:</h3>
              <span>Bình luận: </span>
              <TextField variant="outlined" multiline rows={4} fullWidth size="small" />
              <div className={styles.rating}>
                <span>Đánh giá: </span>
                <Rating
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </div>
              <div className={styles.pleasure}>
                <span>Bạn có hài lòng không?</span>
                <Button variant="contained" size="small">
                  Có
                </Button>
                <Button variant="outlined" size="small">
                  Không
                </Button>
              </div>
              <div className={styles.sendBtn}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Gửi
                </Button>
              </div>
            </>
          ) : (
            ""
          )}
          <hr />
          <Comment />
          <Comment />
          <Comment />
        </CardContent>
      </Card>
    </>
  );
}
