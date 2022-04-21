import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Form.module.css";
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
                  style={{width: "80%", marginLeft: '40px', marginTop: '25px'}} alt="register"/>
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
                  <MenuItem value={"An Giang"}> An Giang</MenuItem>
                  <MenuItem value={"Bà Rịa - Vũng Tàu"}> Bà Rịa - Vũng Tàu</MenuItem>
                  <MenuItem value={"Bắc Giang"}> Bắc Giang</MenuItem>
                  <MenuItem value={"Bắc Kạn"}> Bắc Kạn</MenuItem>
                  <MenuItem value={"Bạc Liêu"}> Bạc Liêu</MenuItem>
                  <MenuItem value={"Bắc Ninh"}> Bắc Ninh</MenuItem>
                  <MenuItem value={"Bến Tre"}> Bến Tre</MenuItem>
                  <MenuItem value={"Bình Định"}> Bình Định</MenuItem>
                  <MenuItem value={"Bình Dương"}> Bình Dương</MenuItem>
                  <MenuItem value={"Bình Phước"}> Bình Phước</MenuItem>
                  <MenuItem value={"Bình Thuận"}> Bình Thuận</MenuItem>
                  <MenuItem value={"Cà Mau"}> Cà Mau</MenuItem>
                  <MenuItem value={"Cần Thơ"}> Cần Thơ</MenuItem>
                  <MenuItem value={"Cao Bằng"}> Cao Bằng</MenuItem>
                  <MenuItem value={"Đà Nẵng"}> Đà Nẵng</MenuItem>
                  <MenuItem value={"Đắk Lắk"}> Đắk Lắk</MenuItem>
                  <MenuItem value={"Đắk Nông"}> Đắk Nông</MenuItem>
                  <MenuItem value={"Điện Biên"}> Điện Biên</MenuItem>
                  <MenuItem value={"Đồng Nai"}> Đồng Nai</MenuItem>
                  <MenuItem value={"Đồng Tháp"}> Đồng Tháp</MenuItem>
                  <MenuItem value={"Gia Lai"}> Gia Lai</MenuItem>
                  <MenuItem value={"Hà Giang"}> Hà Giang</MenuItem>
                  <MenuItem value={"Hà Nam"}> Hà Nam</MenuItem>
                  <MenuItem value={"Hà Nội"}> Hà Nội</MenuItem>
                  <MenuItem value={"Hà Tĩnh"}> Hà Tĩnh</MenuItem>
                  <MenuItem value={"Hải Dương"}> Hải Dương</MenuItem>
                  <MenuItem value={"Hải Phòng"}> Hải Phòng</MenuItem>
                  <MenuItem value={"Hậu Giang"}> Hậu Giang</MenuItem>
                  <MenuItem value={"Hòa Bình"}> Hòa Bình</MenuItem>
                  <MenuItem value={"Hưng Yên"}> Hưng Yên</MenuItem>
                  <MenuItem value={"Khánh Hòa"}> Khánh Hòa</MenuItem>
                  <MenuItem value={"Kiên Giang"}> Kiên Giang</MenuItem>
                  <MenuItem value={"Kon Tum"}> Kon Tum</MenuItem>
                  <MenuItem value={"Lai Châu"}> Lai Châu</MenuItem>
                  <MenuItem value={"Lâm Đồng"}> Lâm Đồng</MenuItem>
                  <MenuItem value={"Lạng Sơn"}> Lạng Sơn</MenuItem>
                  <MenuItem value={"Lào Cai"}> Lào Cai</MenuItem>
                  <MenuItem value={"Long An"}> Long An</MenuItem>
                  <MenuItem value={"Nam Định"}> Nam Định</MenuItem>
                  <MenuItem value={"Nghệ An"}> Nghệ An</MenuItem>
                  <MenuItem value={"Ninh Bình"}> Ninh Bình</MenuItem>
                  <MenuItem value={"Ninh Thuận"}> Ninh Thuận</MenuItem>
                  <MenuItem value={"Phú Thọ"}> Phú Thọ</MenuItem>
                  <MenuItem value={"Phú Yên"}> Phú Yên</MenuItem>
                  <MenuItem value={"Quảng Bình"}> Quảng Bình</MenuItem>
                  <MenuItem value={"Quảng Nam"}> Quảng Nam</MenuItem>
                  <MenuItem value={"Quảng Ngãi"}> Quảng Ngãi</MenuItem>
                  <MenuItem value={"Quảng Ninh"}> Quảng Ninh</MenuItem>
                  <MenuItem value={"Quảng Trị"}> Quảng Trị</MenuItem>
                  <MenuItem value={"Sóc Trăng"}> Sóc Trăng</MenuItem>
                  <MenuItem value={"Sơn La"}> Sơn La</MenuItem>
                  <MenuItem value={"Tây Ninh"}> Tây Ninh</MenuItem>
                  <MenuItem value={"Thái Bình"}> Thái Bình</MenuItem>
                  <MenuItem value={"Thái Nguyên"}> Thái Nguyên</MenuItem>
                  <MenuItem value={"Thanh Hóa"}> Thanh Hóa</MenuItem>
                  <MenuItem value={"Thừa Thiên Huế"}> Thừa Thiên Huế</MenuItem>
                  <MenuItem value={"Tiền Giang"}> Tiền Giang</MenuItem>
                  <MenuItem value={"Thành phố Hồ Chí Minh"}> Thành phố Hồ Chí Minh</MenuItem>
                  <MenuItem value={"Trà Vinh"}> Trà Vinh</MenuItem>
                  <MenuItem value={"Tuyên Quang"}> Tuyên Quang</MenuItem>
                  <MenuItem value={"Vĩnh Long"}> Vĩnh Long</MenuItem>
                  <MenuItem value={"Vĩnh Phúc"}> Vĩnh Phúc</MenuItem>
                  <MenuItem value={"Yên Bái"}> Yên Bái</MenuItem>
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