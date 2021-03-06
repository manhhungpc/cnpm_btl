import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/LoginForm.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [choiceArea, setChoiceArea] = useState([]);
  const [helper, setHelper] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [skills, setSkills] = useState([]);

  const [error, setError] = useState("");
  const [token, setToken] = useToken();
  let navigate = useNavigate();

  const data = {
    username: name,
    email: email,
    password: password,
    phone_number: phoneNumber,
    address: address,
    area: area,
    skills: skills,
  };

  useEffect(() => {
    const fetchArea = async () => {
      const areas = await axios.get("https://provinces.open-api.vn/api/?depth=1");
      setChoiceArea(areas.data);
    };
    fetchArea();
  }, []);

  const onSignup = async () => {
    try {
      const res = await axios.post(`${api}/auth/signup`, data);
      const { token } = res.data.data;
      setToken(token);
      navigate("/");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <Navbar />
      <div id="background-login">
        <Card className={styles.card}>
          <Grid container>
            <Grid item xs={5} sm={5}>
              <img
                src={process.env.PUBLIC_URL + "register.svg"}
                style={{ width: "60%", marginLeft: "40px", marginTop: "25px" }}
                alt="register"
              />
              <Typography
                component="h1"
                variant="h5"
                color="primary"
                sx={{ marginTop: 3, marginLeft: 3, mb: 2, align: "center", fontSize: "28px" }}
              >
                ????ng k?? v???i t?? c??ch:
              </Typography>
              <Box
                sx={{
                  marginTop: 2,
                  marginLeft: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="text"
                  size="small"
                  style={{ display: "flex", flexDirection: "column" }}
                  onClick={(e) => setHelper(true)}
                >
                  <img src={process.env.PUBLIC_URL + "helper.png"} width="100" alt="helper" />
                  <label>Ng?????i gi??p ?????</label>
                </Button>
                <Button
                  variant="text"
                  size="small"
                  style={{ marginLeft: 3, display: "flex", flexDirection: "column" }}
                  onClick={(e) => setHelper(false)}
                >
                  <img src={process.env.PUBLIC_URL + "demander.png"} width="100" alt="demander" />
                  <label>Ng?????i c???n gi??p ?????</label>
                </Button>
              </Box>
            </Grid>

            <Grid container xs={7} spacing={0}>
              <div className={styles.wrapForm}>
                <h2 className={styles.titleForm}>????ng k??</h2>
                {error ? <p className={styles.error}>{error}</p> : ""}
                <TextField
                  required
                  fullWidth
                  margin="dense"
                  label="H??? v?? T??n"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  margin="dense"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  margin="dense"
                  label="M???t kh???u"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                  required
                  fullWidth
                  margin="dense"
                  label="S??? ??i???n tho???i"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <Grid container spacing={1}>
                  <Grid item xs={7}>
                    <TextField
                      fullWidth
                      margin="dense"
                      label="?????a ch???"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl fullWidth margin="dense">
                      <InputLabel>T???nh/Th??nh ph???</InputLabel>
                      <Select
                        label="T???nh/Th??nh ph???"
                        defaultValue="Th??nh ph??? H?? N???i"
                        onChange={(e) => setArea(e.target.value)}
                      >
                        {choiceArea.map((data) => (
                          <MenuItem value={data.name}>{data.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                {helper ? (
                  <TextField
                    fullWidth
                    label="K??? n??ng: (vd s???a ??i???n, ??i ch???, d???y h???c...)"
                    margin="dense"
                    onChange={(e) => setSkills(e.target.value)}
                  />
                ) : (
                  ""
                )}
                <Button fullWidth variant="contained" onClick={onSignup}>
                  ????ng k??
                </Button>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}
