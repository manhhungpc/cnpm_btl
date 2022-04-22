import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/LoginForm.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Register() {
  return (
    <div>
      <Navbar />
      <div id="background-login">
      <Card className={styles.card}>
        <Grid container >
          <Grid item xs={5} sm={5}>
          <img src={process.env.PUBLIC_URL+"register.svg"}
                  style={{width: "60%", marginLeft: '40px', marginTop: '25px'}} alt="register"/>
          <Typography component="h1" variant="h5" color="primary" sx={{ marginTop: 3, marginLeft:3,  mb: 2, align: 'center', fontSize: '28px' }} >
                Đăng ký với tư cách: 
          </Typography>     
          <Box sx={{
             marginTop: 2,
             marginLeft: 10,
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'center',
             }}
          >     
           <Button variant="text" size="small" style={{display: "flex", flexDirection: "column"}}>
            <img src={process.env.PUBLIC_URL+"helper.png"} width="100" alt="helper"/>
            <label>Người giúp đỡ</label>
            </Button>
            <Button variant="text" size="small" style={{ marginLeft: 3, display: "flex", flexDirection: "column"}}>
            <img src={process.env.PUBLIC_URL+"demander.png"}  width="100" alt="demander"/>
            <label>Người cần giúp đỡ</label>
            </Button>
          </Box>
          </Grid>

          <Grid container xs={7} sm={7} spacing={0}>
            <Box component="form" 
              sx={{
                my: 2,
                mx: 4,
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5" color="primary" sx={{ mb: 2, align: 'center', fontSize: '28px', fontWeight:600 }} >
                Đăng ký
              </Typography>
              <Grid container spacing={1}>
               <Grid item xs={12} sm={12}>
               <TextField
                required
                fullWidth
                id="username"
                label="Họ và Tên"
                name="username"
                autoComplete="username"
                autoFocus
              />
               </Grid>
               <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
               </Grid>
               <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Mật khẩu"
                  name="password"
                  autoComplete="password"
                  autoFocus
                />
               </Grid>
               <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Số điện thoại"
                  name="phoneNumber"
                  autoComplete="phoneNumeber"
                  autoFocus
                />
               </Grid>  
               <Grid item xs={8} sm={8}>
                <TextField
                  fullWidth
                  id="address"
                  label="Địa chỉ"
                  name="address"
                  autoComplete="address"
                  autoFocus
                />
               </Grid>
               <Grid item xs={4} sm={4}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tỉnh/Thành phố</InputLabel>
                <Select
                  labelId="provinceLable"
                  id="province"
                  label="Tỉnh/Thành phố"
                >
                  <MenuItem value={"Bắc Ninh"}> Bắc Ninh</MenuItem>
                  <MenuItem value={"Hà Giang"}> Hà Giang</MenuItem>
                  <MenuItem value={"Hà Nam"}> Hà Nam</MenuItem>
                  <MenuItem value={"Hà Nội"}> Hà Nội</MenuItem>
                  <MenuItem value={"Hà Tĩnh"}> Hà Tĩnh</MenuItem>
                  <MenuItem value={"Hải Dương"}> Hải Dương</MenuItem>
                  <MenuItem value={"Hải Phòng"}> Hải Phòng</MenuItem>
                  <MenuItem value={"Hòa Bình"}> Hòa Bình</MenuItem>
                  <MenuItem value={"Hưng Yên"}> Hưng Yên</MenuItem>
                </Select>
              </FormControl>
               </Grid>
               <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="skill"
                  label="Kỹ năng: (vd sửa điện, đi chợ, dạy học...)"
                  name="skill"
                  autoComplete="skill"
                  autoFocus
                />
               </Grid>
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký
            </Button>
            </Box>   
          </Grid>
        </Grid>
      </Card>
      </div>
    </div>
  );
}