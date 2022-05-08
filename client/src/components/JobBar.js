import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import Avatar from "@mui/material/Avatar";
import styles from "../styles/JobBar.module.css";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      display: "inline",
      padding: "10px",
      marginLeft: "10%",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function JobBar({ data }) {
  console.log(data);
  const linkInfo = `/job/${data.id}`;
  return (
    <Card className={styles.wrapper}>
      <CardActionArea href={linkInfo}>
        {/* className={data.available ? "" : styles.disable} */}
        <CardContent>
          <Grid container>
            <Grid xs={6}>
              <h3>{data.title} </h3>
              <small className={styles.description}>{data.content}</small>
              {data.available ? "" : <p className={styles.unavailable}>Đã có người nhận</p>}
            </Grid>
            <Grid xs={6}>
              <p>
                Người đăng:{" "}
                <a className={styles.link} href={`/user/${data.user_id}`}>
                  <b>{data.user.username}</b>
                </a>
                <Avatar {...stringAvatar(`${data.user.username}`)} variant="rounded" />
              </p>
              <p>Kỹ năng: {data.type - 1 ? "Chuyên nghiệp" : "Thường"}</p>
              <div className={styles.details}>
                <div>
                  Tiền công:{" "}
                  <b>
                    {parseInt(data.fee, 10)
                      ? `${data.fee.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}vnđ`
                      : "Free"}
                  </b>
                </div>
                <a className={styles.link} href={`/jobs`}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AddLocationSharpIcon />
                    {data.area}
                  </div>
                </a>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
