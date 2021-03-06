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
          Quay l???i danh s??ch vi???c l??m
        </Button>
        <h1>{info.title}</h1>
        <div className={styles.userInfo}>
          <h3>Ng?????i ????ng:</h3>
          <div>
            <p style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon /> &nbsp; {info.user.username}
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <EmailIcon /> &nbsp; {info.user.email}
            </p>
          </div>
        </div>
        <h3>M?? t??? c??? th???</h3>
        <Card variant="outlined">
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <div className={styles.field}>
                  <b>Khu v???c: &nbsp;</b>
                  <span>{info.area}</span>
                </div>
                <div className={styles.field}>
                  <b>S??? ??i???n tho???i li??n l???c: &nbsp;</b>
                  <span>{info.contact}</span>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.field}>
                  <b> Lo???i c??ng vi???c: &nbsp;</b>
                  <span>{info.type - 1 ? "Th?????ng" : "Chuy??n nghi???p"}</span>
                </div>
                <div className={styles.field}>
                  <b>Th???i gian gi??p ?????: &nbsp;</b>
                  <span>{new Date(info.time_required).toLocaleString("en-GB")}</span>
                </div>
              </Grid>
            </Grid>
            <div>
              <b style={{ width: "100%" }}>N???i dung c??ng vi???c: &nbsp;</b>
              <span className={styles.content}>{info.content}</span>
            </div>
            <div className={styles.field}>
              <b>K??? n??ng y??u c???u: &nbsp;</b>
              <span>{info.skill_required}</span>
            </div>
            <div className={styles.field}>
              <b>Ph?? tr???: &nbsp;</b>
              <span>{parseInt(info.fee, 10) ? `${info.fee}vn??` : "Mi???n ph??"}</span>
            </div>
            {owner && (
              <>
                {!receiver.length ? (
                  <b>Hi???n ch??a c?? ai nh???n c??ng vi???c n??y</b>
                ) : (
                  <div className={styles.field}>
                    <div>
                      <b>Nh???ng ng?????i nh???n: &nbsp;</b>
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
                        ???? c?? ng?????i nh???n c??ng vi???c n??y
                      </Button>
                    </div>
                  ) : (
                    <b className={styles.received}>???? c?? ng?????i nh???n</b>
                  )}
                  <div className={styles.acceptBtn}>
                    <Button variant="contained" color="error" onClick={onDeleteJob}>
                      X??a c??ng vi???c
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {info.available ? (
                    <Button variant="outlined" onClick={onReciveJob}>
                      Nh???n c??ng vi???c n??y <AssignmentTurnedInIcon />
                    </Button>
                  ) : (
                    <b className={styles.received}>???? c?? ng?????i nh???n</b>
                  )}
                </>
              )}
            </div>
            {choose ? <p className={styles.notif}>B???n c???n ch??? ch??? s??? h???u x??c nh???n!</p> : ""}
          </CardContent>
        </Card>
        <br />
        <ReviewCard owner={owner} />
      </div>
      <Footer />
    </>
  );
}
