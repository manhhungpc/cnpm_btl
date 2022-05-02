import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/LoginForm.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [token, setToken] = useToken();
  let navigate = useNavigate();

  const data = {
    email: email,
    password: password,
  };

  const onLogin = async () => {
    try {
      const res = await axios.post(`${api}/auth/login`, data);
      const { token } = res.data.data;
      console.log(res.data.data);
      setToken(token);
      navigate("/");
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  return (
    <div>
      <Navbar />
      <Card className={styles.card}>
        <Grid container>
          <Grid item sm={6} alignContent="center">
            <img
              src={process.env.PUBLIC_URL + "login.svg"}
              style={{ width: "90%", height: "90%", marginLeft: "35px", marginTop: "20px" }}
              alt="login"
            />
          </Grid>
          <Grid item sm={6}>
            <Box
              sx={{
                my: 2,
                mx: 4,
                minWidth: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <Avatar sx={{ m: 0, bgcolor: "#1976D2" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                color="primary"
                sx={{ mt: 2, align: "center", fontSize: "28px", fontWeight: 600 }}
              >
                Đăng nhập
              </Typography>
              {error ? <p className={styles.error}>{error}</p> : ""}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Mật khẩu"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onLogin}
              >
                Đăng nhập
              </Button>
              <Link href="/register" variant="body2">
                Bạn chưa có tài khoản ? Đăng ký ngay
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
