import React, { useState } from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useUser } from "../utils/useUser";
import { useNavigate } from "react-router-dom";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

const EditInfoForm = ({ open, label, handleClose, setInfo, onUpdateUser }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          onChange={(e) => setInfo(e.target.value)}
          label={label}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={onUpdateUser}>Cập nhật</Button>
      </DialogActions>
    </Dialog>
  );
};

export default function Infor({ info, params }) {
  const [openEmail, setOpenEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [openArea, setOpenArea] = useState(false);
  const [area, setArea] = useState("");
  const [openPhone, setOpenPhone] = useState(false);
  const [phone, setPhone] = useState("");
  const [openAddress, setOpenAddress] = useState(false);
  const [address, setAddress] = useState("");

  const [token] = useToken();
  const user = useUser();
  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const handleClose = () => {
    setOpenEmail(false);
    setOpenArea(false);
    setOpenPhone(false);
    setOpenAddress(false);
  };

  const dataEdit = {
    email: email ? email : info.email,
    area: area ? area : info.area,
    phone_number: phone ? phone : info.phone_number,
    address: address ? address : info.address,
  };

  const navigate = useNavigate();
  const onUpdateUser = async () => {
    const response = await axios.put(`${api}/user/profile/${params.id}`, dataEdit, headers);
    handleClose();
    navigate(0);
  };

  return (
    <div className={getBsClass("col-md-12") + " " + Styles.grid_margin}>
      <div className={Styles.card + " " + Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <EditInfoForm
            open={openEmail}
            label="Email"
            setInfo={setEmail}
            handleClose={handleClose}
            onUpdateUser={onUpdateUser}
          />
          <EditInfoForm
            open={openArea}
            label="Địa chỉ"
            setInfo={setArea}
            handleClose={handleClose}
            onUpdateUser={onUpdateUser}
          />
          <EditInfoForm
            open={openPhone}
            label="Số điện thoại"
            setInfo={setPhone}
            onUpdateUser={onUpdateUser}
            handleClose={handleClose}
          />
          <EditInfoForm
            open={openAddress}
            label="Nơi ở"
            setInfo={setAddress}
            onUpdateUser={onUpdateUser}
            handleClose={handleClose}
          />
          <div className={getBsClass("flex align-items-center justify-content-between mb-2")}>
            <h3 className={getBsClass("card-title mb-3") + " " + Styles.head_card}>Giới thiệu</h3>
          </div>
          <div className={getBsClass("mt-3")}>
            <EmailSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              Email:
              {user.id === params.id && (
                <Button onClick={() => setOpenEmail(true)}>
                  <BorderColorSharpIcon />
                </Button>
              )}
            </label>
            <p className={getBsClass("text-muted")}>{info.email}</p>
          </div>

          <div className={getBsClass("mt-3")}>
            <HomeSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              Địa chỉ:
              {user.id === params.id && (
                <Button onClick={() => setOpenArea(true)}>
                  <BorderColorSharpIcon />
                </Button>
              )}
            </label>
            <p className={getBsClass("text-muted")}>{info.area}</p>
          </div>
          <div className={getBsClass("mt-3")}>
            <LocalPhoneSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              SĐT:{" "}
              {user.id === params.id && (
                <Button onClick={() => setOpenPhone(true)}>
                  <BorderColorSharpIcon />
                </Button>
              )}
            </label>
            <p className={getBsClass("text-muted")}>{info.phone_number}</p>
          </div>
          <div className={getBsClass("mt-3")}>
            <CalendarMonthSharpIcon />
            <label className={getBsClass("tx-11 font-weight-bold mb-0 text-uppercase")}>
              Nơi ở:
              {user.id === params.id && (
                <Button onClick={() => setOpenAddress(true)}>
                  <BorderColorSharpIcon />
                </Button>
              )}
            </label>
            <p className={getBsClass("text-muted")}>{info.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
