import React from "react";
import Rating from "@mui/material/Rating";

export default function Comment({ data }) {
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
      <hr />
    </>
  );
}
