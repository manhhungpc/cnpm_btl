import React from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
  <AppBar position="sticky" style={{ backgroundColor: "#2d8ce8", color: "#000", height: "50px" }}>
    <div>
    <Tab
      label={<p className={styles.logoText}>Helpy</p>}
      // img className={styles.photo1} src={process.env.PUBLIC_URL+"Text.png"} />
      className={styles.homeTab}
      href="/"
    />
    <Tab
      label={<p className={styles.textTab}>Công việc</p>}
      className={styles.tab}
      href="/"
    />
    <Tab label={<p className={styles.textTab}>Liên hệ</p>} className={styles.tab} />
    <Tab label={<p className={styles.textTab}>Về chúng tôi</p>} className={styles.tab} />
    <Button href="/login" variant="contained" color="primary" style={{marginLeft: "54%"}}>
      <p2 className={styles.button}>Đăng nhập</p2>
    </Button>
    <Button href="/register" variant="contained" color="primary" style={{marginLeft: "0.5%"}}>
    <p2 className={styles.button}>Đăng ký</p2>
    </Button>
  </div>  
  </AppBar>);
}
