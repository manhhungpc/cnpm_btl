import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import axios from "axios";
import { api } from "../utils/api";
import { useUser } from "../utils/useUser";
import { useNavigate } from "react-router-dom";

export default function Comment({ data, headers }) {
  const user = useUser();
  const navigate = useNavigate();

  const onDeleteComment = async () => {
    await axios.delete(`${api}/review/${data.id}`, headers, { user_id: user.id });
    navigate(0);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>
          {data.user.username} &nbsp;
          <Rating value={data.stars} readOnly />
        </h3>
        <b>{data.pleasure ? "Hài lòng" : "Không hài lòng"}</b>
      </div>
      <p style={{ color: "#808089", fontWeight: "600" }}>{data.review}</p>
      {user.id === data.user_id && (
        <Button variant="contained" color="error" onClick={onDeleteComment}>
          Xóa
        </Button>
      )}
      <hr />
    </>
  );
}
