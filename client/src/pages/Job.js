import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/Job.module.css";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import JobBar from "../components/JobBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import Link from "@mui/material/Link";

export default function Job() {
  const [sort, setSort] = useState("lastest");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const RelatedJob = () => (
    <Stack spacing={2}>
      <Link href="#" underline="none">
        <Paper elevation={3} style={{ padding: "10px" }}>
          <h3>Cần người kèm học</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>100$</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AddLocationSharpIcon />
              Ha Noi
            </div>
          </div>
        </Paper>
      </Link>
    </Stack>
  );

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1>Tìm công việc phù hợp với bạn</h1>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <div className={styles.options}>
              <Button variant="outlined" endIcon={<AddIcon />}>
                Tạo 1 công việc mới của bạn
              </Button>
              <div className={styles.alignCenter}>
                Sắp xếp theo: &nbsp;
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <Select labelId="job-sort" value={sort} onChange={handleChange}>
                    <MenuItem value="lastest">Mới nhất</MenuItem>
                    <MenuItem value="area">Khu vực</MenuItem>
                    <MenuItem value="title-asc">Tiêu đề A-Z</MenuItem>
                    <MenuItem value="title-dec">Tiêu đề Z-A</MenuItem>
                    <MenuItem value="fee-asc">Tiền lương</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <hr />
            <JobBar />
            <JobBar />
            <JobBar />
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3>Thành viên nổi bật</h3>
              <hr />
              <List sx={{ width: "100%" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#000" }}>OP</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="BJohn Doe"
                    secondary={
                      <>
                        <div>10 review</div>
                        <div>Đã đăng: 10 công việc</div>
                      </>
                    }
                  />
                </ListItem>
                <hr />
              </List>
            </div>
            <div>
              <h3>Những công việc có thể bạn thích</h3>
              <hr />
              <RelatedJob />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
