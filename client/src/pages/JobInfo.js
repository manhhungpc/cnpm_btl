import { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useUser } from "../utils/useUser";

export default function JobInfo() {
  const idJob = useParams();
  const [token] = useToken();
  const user = useUser();
  const [info, setInfo] = useState({ user: { username: "", email: "" } });
  const [owner, setOwner] = useState(false);
  const [choose, setChoose] = useState(false);

  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const getJobInfo = async () => {
    const job = await axios.get(`${api}/job/${idJob.job_id}`, headers);
    setInfo(job.data.data);
    console.log(job.data);
    if (user.id === job.data.data.user_id) {
      setOwner(true);
    }
  };

  useEffect(() => {
    getJobInfo();
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Button href="/jobs" variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
          Quay lại danh sách việc làm
        </Button>
        <h1>{info.title}</h1>
        <div className={styles.userInfo}>
          <h3>Người đăng:</h3>
          <div>
            <p style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon /> &nbsp; {info.user.username}
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <EmailIcon /> &nbsp; {info.user.email}
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
                  <span>{info.area}</span>
                </div>
                <div className={styles.field}>
                  <b>Số điện thoại liên lạc: &nbsp;</b>
                  <span>{info.contact}</span>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.field}>
                  <b> Loại công việc: &nbsp;</b>
                  <span>{info.type - 1 ? "Thường" : "Chuyên nghiệp"}</span>
                </div>
                <div className={styles.field}>
                  <b>Thời gian giúp đỡ: &nbsp;</b>
                  <span>{info.time_required}</span>
                </div>
              </Grid>
            </Grid>
            <div>
              <b style={{ width: "100%" }}>Nội dung công việc: &nbsp;</b>
              <span className={styles.content}>{info.content}</span>
            </div>
            <div className={styles.field}>
              <b>Kỹ năng yêu cầu: &nbsp;</b>
              <span>{info.skill_required}</span>
            </div>
            <div className={styles.field}>
              <b>Phí trả: &nbsp;</b>
              <span>{parseInt(info.fee, 10) ? `${info.fee}vnđ` : "Miễn phí"}</span>
            </div>
            <div className={styles.acceptBtn}>
              {owner ? (
                <Button variant="contained">Đã có người nhận công việc này</Button>
              ) : (
                <>
                  <Button variant="outlined" onClick={(e) => setChoose(true)}>
                    Nhận công việc này <AssignmentTurnedInIcon />
                  </Button>
                </>
              )}
            </div>
            {choose ? <p className={styles.notif}>Bạn cần chờ chủ sở hữu xác nhận!</p> : ""}
          </CardContent>
        </Card>
        <h3>Đánh giá, bình luận</h3>
        <ReviewCard owner={owner} />
      </div>
      <Footer />
    </>
  );
}
