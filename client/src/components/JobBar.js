import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import Avatar from "@mui/material/Avatar";
import styles from "../styles/JobBar.module.css";

export default function JobBar() {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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

  return (
    <Card className={styles.wrapper}>
      <CardActionArea href="#">
        <CardContent>
          <Grid container>
            <Grid xs={8}>
              <h2>Cần người dạy giải tích </h2>
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </Grid>
            <Grid xs={4}>
              <p>
                Người đăng:{" "}
                <a className={styles.link} href="/user">
                  <b>John Doe</b>
                </a>
                <Avatar {...stringAvatar("John Doe")} variant="rounded" />
              </p>
              <p>10 review</p>
              <div className={styles.details}>
                <div>Tiền công: 100$</div>
                <a className={styles.link} href="/location">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AddLocationSharpIcon />
                    Ha Noi
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
