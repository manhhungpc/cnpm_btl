import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/Job.module.css";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import JobBar from "../components/JobBar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import Link from "@mui/material/Link";
import axios from "axios";
import { api } from "../utils/api";
import Pagination from "@mui/material/Pagination";
import { useToken } from "../utils/useToken";
import TextField from "@mui/material/TextField";

const sortOption = [
  {
    label: "Mới nhất",
    value: "updatedAt DESC",
  },
  {
    label: "Khu vực",
    value: "area ASC",
  },
  {
    label: "Tiêu đề A-Z",
    value: "title ASC",
  },
  {
    label: "Tiêu đề Z-A",
    value: "title DESC",
  },
  {
    label: "Tiền lương tăng dần",
    value: "fee ASC",
  },
  {
    label: "Tiền lương giảm dần",
    value: "fee DESC",
  },
];
export default function Job() {
  const [sort, setSort] = useState("updatedAt DESC");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  const [jobs, setJobs] = useState([]);
  const [token] = useToken();

  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const getRequestJob = async () => {
    const sortBy = sort.split(" ")[0];
    const order = sort.split(" ")[1];
    const response = await axios.get(
      `${api}/jobs?page=${page}&sort=${sortBy}&order=${order}&search=${search}`,
      headers
    );
    setTotalPage(response.data.totalPage);
    setJobs(response.data.data);
  };

  useEffect(() => {
    getRequestJob();
  }, [sort]);

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
              <Button variant="outlined" href="/create-new-job" endIcon={<AddIcon />}>
                Tạo 1 công việc mới của bạn
              </Button>
              <div className={styles.alignCenter}>
                Sắp xếp theo: &nbsp;
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <Select value={sort} onChange={(e) => setSort(e.target.value)} label=" ">
                    {sortOption.map((data) => (
                      <MenuItem value={data.value}>{data.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <hr />
            {!jobs.length ? <h3>Không tìm thấy với từ khóa này. Bạn thử từ khác nhé!</h3> : ""}
            {jobs.map((data) => (
              <JobBar data={data} />
            ))}
            <Pagination
              color="primary"
              count={totalPage}
              page={page}
              onChange={(e, value) => setPage(value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Tìm kiếm gì đó?"
              variant="outlined"
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              fullWidth
              onClick={getRequestJob}
            >
              Tìm
            </Button>
            <div>
              <h3>Những công việc có thể bạn thích</h3>
              <hr />
              <RelatedJob />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
