import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
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
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useUser } from "../utils/useUser";

export default function JobInfo() {
  const idJob = useParams();
  const navigate = useNavigate();
  const [token] = useToken();
  const user = useUser();
  const [info, setInfo] = useState({ user: { username: "", email: "" } });
  const [owner, setOwner] = useState(false);
  const [choose, setChoose] = useState(false);
  const [receiver, setReceiver] = useState([]);

  console.log(receiver);

  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const getJobInfo = async () => {
    const job = await axios.get(`${api}/job/${idJob.job_id}`, headers);
    setInfo(job.data.data);
    if (user.id === job.data.data.user_id) {
      setOwner(true);
    }
    if (job.data.data.notif) {
      setReceiver(JSON.parse(job.data.data.notif));
    }
  };

  const onReciveJob = async () => {
    setChoose(true);
    const data = {
      notif: {
        user_id: user.id,
        username: user.name,
      },
      user_id: user.id,
    };

    await axios.put(`${api}/job/${idJob.job_id}`, data, headers);
    getJobInfo();
  };

  const onDeleteJob = async () => {
    await axios.delete(`${api}/job/${idJob.job_id}`, headers, { user_id: user.id });
    navigate("/jobs");
  };

  const onUnavailable = async () => {
    await axios.put(`${api}/job/${idJob.job_id}`, { available: false, user_id: user.id }, headers);
    navigate(0);
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
                  <span>{new Date(info.time_required).toLocaleString("en-GB")}</span>
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
            {owner && (
              <>
                {!receiver.length ? (
                  <b>Hiện chưa có ai nhận công việc này</b>
                ) : (
                  <div className={styles.field}>
                    <div>
                      <b>Những người nhận: &nbsp;</b>
                      {receiver.map((item) => (
                        <Button href={`/user/${item.user_id}`}>{item.username},</Button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            <div className={styles.acceptBtn}>
              {owner ? (
                <div>
                  {info.available ? (
                    <div className={styles.acceptBtn}>
                      <Button variant="contained" onClick={onUnavailable}>
                        Đã có người nhận công việc này
                      </Button>
                    </div>
                  ) : (
                    <b className={styles.received}>Đã có người nhận</b>
                  )}
                  <div className={styles.acceptBtn}>
                    <Button variant="contained" color="error" onClick={onDeleteJob}>
                      Xóa công việc
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {info.available ? (
                    <Button variant="outlined" onClick={onReciveJob}>
                      Nhận công việc này <AssignmentTurnedInIcon />
                    </Button>
                  ) : (
                    <b className={styles.received}>Đã có người nhận</b>
                  )}
                </>
              )}
            </div>
            {choose ? <p className={styles.notif}>Bạn cần chờ chủ sở hữu xác nhận!</p> : ""}
          </CardContent>
        </Card>
        <br />
        <ReviewCard owner={owner} />
      </div>
      <Footer />
    </>
  );
}
