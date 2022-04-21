import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Form.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';

export default function Login() {
  return (
    <div>
      <Navbar />
      <Card className={styles.card}>
        <Grid container>
          <Grid item sm={6} alignContent="center">
            <img src={process.env.PUBLIC_URL+"login.svg"}
                  style={{width: "90%", height: "90%", marginLeft: '35px', marginTop: '20px'}} alt="login"/>
          </Grid>
          <Grid item sm={6}>
            <Box
              sx={{
                my: 2,
                mx: 4,
                minWidth: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '40px'
                
              }}
            >
              <Avatar sx={{ m: 0, bgcolor: '#1976D2' }}>
              <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="primary" sx={{ mt: 2, align: 'center', fontSize: '28px', fontWeight:600 }} >
                Đăng nhập
              </Typography>
              <Box component="form" sx={{ mt: 1 }}> 
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Link href="/register" variant="body2">
                {"Bạn chưa có tài khoản ? Đăng ký ngay"}
              </Link>
              </Box>
            </Box>   
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
