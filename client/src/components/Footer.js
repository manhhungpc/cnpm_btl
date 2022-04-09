import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.styles.css";

export default function Footer() {
  return (
    <div class="wrapper">
      <Card class="card">
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <p class="title1">  <img class="photo" src={process.env.PUBLIC_URL+"PNGfooter.png"} />  HELPY </p>
            <p class="listItem1">If you need help from the electrician, mechanic,... Helpy will enable the you to seek and call them for help. </p>
            {/* <img class="photo" src={process.env.PUBLIC_URL+"PNGfooter.png"} /> */}
          </Grid>
          <Grid item sm={3}>
            <p class="title">NAVIGATION</p>
            <ul class="list">
              <li class="listItem">Home</li>
              <li class="listItem">......</li>
              <li class="listItem">......</li>
            </ul>
          </Grid>
          <Grid item sm={3}>
            <p class="title">CONTACT</p>
            <div class="linkWrapper">
              <FacebookIcon />
              <a href="/" class="link">
                Facebook
              </a>
            </div>
            <div class="linkWrapper">
              <EmailIcon />
              <a href="mailto:" class="link">
                Email
              </a>
            </div>
          </Grid>
          <Grid item sm={3}>
            <p class="title">CONTRIBUTOR</p>
            <ul class="list">
              <li class="listItem">Front-end Developer:</li>
              <li class="listItem">Back-end Developer:</li>
              <li class="listItem">Project Manager:</li>
            </ul>
          </Grid>
        </Grid>
        <hr/>
         <div align="center">
           <p class="infor">
             &copy;{new Date().getFullYear()} SOFTWARE ENGINEERING | All rights reserved |
             <a href="/" class="link">Terms Of Service</a> | <a href="/" class="link">Privacy</a>
           </p>
         </div>
      </Card>
    </div>
  );
}