import React, { useState } from "react";
import Styles from "../styles/Profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "bootstrap-css-module";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useUser } from "../utils/useUser";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

export default function Offers({ info, skill, params }) {
  const [addOpen, setAddOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [token] = useToken();
  const user = useUser();
  const navigate = useNavigate();

  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const dataEdit = {
    email: info.email,
    area: info.area,
    phone_number: info.phone_number,
    address: info.address,
    skills: skill,
  };

  const onRemoveSkill = async (index) => {
    skill.splice(index, 1);
    await axios.put(`${api}/user/profile/${params.id}`, dataEdit, headers);
  };

  const onUpdateSkills = async () => {
    skill.push(newSkill);
    await axios.put(`${api}/user/profile/${params.id}`, dataEdit, headers);
    navigate(0);
  };

  return (
    <div className={getBsClass("col-md-12") + " " + Styles.grid_margin}>
      <div className={Styles.card + " " + Styles.rounded}>
        <div className={getBsClass("card-body")}>
          <h3 className={getBsClass("card-title mb-3") + " " + Styles.head_card}>
            Kĩ năng/Chuyên môn
          </h3>
          {skill.map((offer, index) => (
            <div className={getBsClass("d-flex justify-content-between mb-2 pb-2 border-bottom")}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img
                  className={Styles.img_xs + " " + Styles.rounded_circle}
                  src="/electric.png"
                  alt=""
                />
                <div style={{ marginLeft: "20px" }}>
                  <p>
                    {offer}
                    {user.id === params.id && (
                      <button
                        onClick={() => onRemoveSkill(index)}
                        className={getBsClass("btn btn-link shadow-none")}
                      >
                        <DeleteForeverIcon />
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className={getBsClass("d-flex justify-content-between")}>
            <div className={getBsClass("d-flex align-items-center hover-pointer")}>
              <div className={getBsClass("ml-2")}>
                {addOpen && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      autoFocus
                      onChange={(e) => setNewSkill(e.target.value)}
                      label="Nhập kỹ năng"
                      margin="dense"
                      variant="standard"
                    />
                    <Button
                      variant="contained"
                      onClick={onUpdateSkills}
                      style={{ margin: "0 5px" }}
                    >
                      Thêm
                    </Button>
                    <Button variant="outlined" onClick={() => setAddOpen(false)}>
                      Hủy
                    </Button>
                  </div>
                )}

                <Button
                  variant="contained"
                  onClick={() => setAddOpen(!addOpen)}
                  startIcon={<AddIcon />}
                >
                  Thêm kĩ năng/Chuyên môn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
