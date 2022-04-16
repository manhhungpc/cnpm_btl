import React from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <AppBar position="static" className={styles.wrapper}>
      <div className={styles.grid}>
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
        </div>
        <div>
          <Button href="/login" variant="contained" color="primary" className={styles.btn}>
            Đăng nhập
          </Button>
          <Button href="/register" variant="contained" color="primary" className={styles.btn}>
            Đăng ký
          </Button>
        </div>
      </div>
    </AppBar>
  );
}
