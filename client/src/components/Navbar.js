import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
  <AppBar position="static" style={{ backgroundColor: "#fff", color: "#000", height: "50px" }}>
    <div>
    <Tab
      label={<p className={styles.logoText}>Helpy</p>}
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
    <Button href="/login" variant="contained" color="primary" style={{ marginRight: "20px", marginLeft: "560px"}}>
      Đăng nhập
    </Button>
    <Button href="/register" variant="contained" color="primary">
       Đăng ký
    </Button>
  </div>  
  </AppBar>);
}
