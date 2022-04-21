import React from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PollIcon from "@mui/icons-material/Poll";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../styles/JobInfo.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function JobInfo() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
          Quay lại danh sách việc làm
        </Button>
        <h1>Tiêu đề công việc</h1>
        <div className={styles.userInfo}>
          <h3>Người đăng:</h3>
          <div>
            <p style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon /> &nbsp; John Doe
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <EmailIcon /> &nbsp; john@doe.com
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <PollIcon /> &nbsp; 10 lượt vote
            </p>
          </div>
        </div>
        <h3>Mô tả cụ thể</h3>
        <Card variant="outlined">
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <div className={styles.field}>
                  <b>Khu vực: &nbsp;</b>
                  <span>Hà nội</span>
                </div>
                <div className={styles.field}>
                  <b>Số điện thoại liên lạc: &nbsp;</b>
                  <span>0123456789</span>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.field}>
                  <b> Loại công việc: &nbsp;</b>
                  <span>Thường</span>
                </div>
                <div className={styles.field}>
                  <b>Thời gian làm việc: &nbsp;</b>
                  <span>T5, 21/4/2022, 19h-21h</span>
                </div>
              </Grid>
            </Grid>
            <div style={{ display: "flex" }}>
              <b style={{ width: "100%" }}>Nội dung công việc: </b>
              <span className={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
              </span>
            </div>
            <div className={styles.field}>
              <b>Kỹ năng yêu cầu: &nbsp;</b>
              <span>Rửa bát, nấu ăn</span>
            </div>
            <div className={styles.field}>
              <b>Phí trả: &nbsp;</b>
              <span>Miễn phí</span>
            </div>
            <div className={styles.acceptBtn}>
              <Button variant="outlined">
                Nhận công việc này <AssignmentTurnedInIcon />
              </Button>
              <Button variant="contained">Đã có người nhận công việc này</Button>
              {/*Danh cho chu so huu */}
            </div>
            <p className={styles.notif}>Bạn cần chờ chủ sở hữu xác nhận!</p>
          </CardContent>
        </Card>
        <h3>Đánh giá, bình luận</h3>
        <ReviewCard />
      </div>
      <Footer />
    </>
  );
}
