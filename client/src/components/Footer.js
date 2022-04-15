import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <p className={styles.title1}>  <img className={styles.photo} src={process.env.PUBLIC_URL+"PNGfooter.png"} />HELPY</p>
            <p className={styles.listItem1}>Nếu bạn có nhu cầu sửa chữa các thiết bị trong gia đình, xe cộ hay đơn giản chỉ là shipper... Helpy sẽ giúp bạn không cần phải lo lắng về điều đó. </p>
            {/* <img className="photo" src={process.env.PUBLIC_URL+"PNGfooter.png"} /> */}
          </Grid>
          <Grid item sm={3}>
            <p className={styles.title}>ĐIỀU HƯỚNG</p>
            <ul className={styles.list}>
              <li className={styles.listItem}> <a href="/" className={styles.link1}>Trang chủ</a></li>
              <li className={styles.listItem}> <a href="/" className={styles.link1}>Công việc</a></li>
              <li className={styles.listItem}> <a href="/" className={styles.link1}>Về chúng tôi</a></li>
            </ul>
          </Grid>
          <Grid item sm={3}>
            <p className={styles.title}>LIÊN HỆ</p>
            <div className={styles.linkWrapper}>
              <FacebookIcon />
              <a href="/" className={styles.link}>
                Facebook
              </a>
            </div>
            <div className={styles.linkWrapper}>
              <EmailIcon />
              <a href="mailto:" className={styles.link}>
                Email
              </a>
            </div>
          </Grid>
          <Grid item sm={3}>
            <p className={styles.title}>NHÓM THỰC HIỆN</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Front-end Developer:</li>
              <li className={styles.listItem}>Back-end Developer:</li>
              <li className={styles.listItem}>Project Manager:</li>
            </ul>
          </Grid>
        </Grid>
        <hr/>
         <div align="center">
           <p className={styles.infor}>
             &copy;{new Date().getFullYear()} SOFTWARE ENGINEERING | All rights reserved |
             <a href="/" className={styles.link}>Terms Of Service</a> | <a href="/" className={styles.link}>Privacy</a>
           </p>
         </div>
      </Card>
    </div>
  );
}