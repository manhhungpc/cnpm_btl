import React from "react";
import Rating from "@mui/material/Rating";

export default function Comment() {
  return (
    <>
      <h3>
        John Doe &nbsp;
        <Rating value={2} readOnly />
      </h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s,
      </p>
      <hr />
    </>
  );
}
