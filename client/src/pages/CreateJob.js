import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styles from "../styles/CreateJob.module.css";
import JobForm from "../components/JobForm";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";

export default function CreateJob() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h1 className={styles.title}>Xin chào User</h1>
            <p>
              Bạn cần giúp đỡ? Hãy tạo 1 công việc mới, chúng tôi sẽ giúp đỡ bạn tìm kiếm những
              người có thể giúp bạn. Thao tác tạo cũng rất đơn giản, nhanh chóng, và hoàn toàn miễn
              phí
            </p>
            <h3>Xem lại những công việc bạn đã tạo</h3>
            <Button endIcon={<WorkHistoryIcon />}>Công việc của bạn</Button>
            <h3>Hoặc xem những công việc khác xung quanh bạn</h3>
            <Button href="/jobs" endIcon={<AirlineStopsIcon />}>
              Các công việc khác
            </Button>
          </Grid>
          <Grid item xs={6}>
            <JobForm />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
