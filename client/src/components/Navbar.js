import React from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import styles from "../styles/Navbar.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { useUser } from "../utils/useUser";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useUser();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate(0);
    navigate("/");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#fff", color: "#000", height: "50px" }}>
      <div className={styles.grid}>
        <div>
          <Tab
            label={<p className={styles.logoText}>Helpy</p>}
            className={styles.homeTab}
            href="/"
          />
          <Tab
            label={<p className={styles.textTab}>Việc làm</p>}
            className={styles.tab}
            href="/jobs"
          />
          <Tab
            label={<p className={styles.textTab}>Nhờ giúp đỡ</p>}
            className={styles.tab}
            href="/create-new-job"
          />
          <Tab label={<p className={styles.textTab}>Về chúng tôi</p>} className={styles.tab} />
        </div>
        {user ? (
          <div style={{ display: "flex" }}>
            <Avatar sx={{ bgcolor: "#ee7600" }} />
            <Button variant="text" onClick={handlePopover} color="primary">
              {user.name}
            </Button>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <List style={{ width: "100%" }}>
                <ListItemButton component="a" href={`/user/${user.id}`}>
                  Xem thông tin cá nhân
                </ListItemButton>
                <ListItemButton onClick={onLogout}>Đăng xuất</ListItemButton>
              </List>
            </Popover>
          </div>
        ) : (
          <div>
            <Button href="/login" variant="contained" color="primary" style={{ margin: "5px 8px" }}>
              Đăng nhập
            </Button>
            <Button
              href="/register"
              variant="contained"
              color="primary"
              style={{ margin: "5px 8px" }}
            >
              Đăng ký
            </Button>
          </div>
        )}
      </div>
    </AppBar>
  );
}
