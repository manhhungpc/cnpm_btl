import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../styles/JobForm.module.css";
import axios from "axios";
import { api } from "../utils/api";
import { useToken } from "../utils/useToken";
import { useUser } from "../utils/useUser";
import { useNavigate } from "react-router-dom";

const types = [
  {
    value: 1,
    label: "Thường",
  },
  {
    value: 2,
    label: "Chuyên nghiệp",
  },
];

export default function JobForm() {
  const [choiceArea, setChoiceArea] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [requiredSkill, setRequiredSkill] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState(1);
  const [fee, setFee] = useState(0);

  const [error, setError] = useState("");
  const user = useUser();
  const [token] = useToken();
  let navigate = useNavigate();
  const isDisabled = type - 1 ? false : true;

  console.log(type);

  useEffect(() => {
    const fetchArea = async () => {
      const areas = await axios.get("https://provinces.open-api.vn/api/?depth=1");
      setChoiceArea(areas.data);
    };
    fetchArea();
  }, []);

  const data = {
    title: title,
    content: content,
    skill_required: requiredSkill,
    area: area,
    contact: contact,
    time_required: time,
    type: type,
    fee: fee,
    user_id: user.id,
  };

  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const onCreateJob = async () => {
    try {
      if (type === 2 && !fee) {
        setError("Hãy thêm phí trả cho loại việc chuyên nghiệp nhé!");
        return;
      }
      const res = await axios.post(`${api}/jobs`, data, headers);
      console.log(res.data);
      navigate("/jobs");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          {error ? <p className={styles.error}>{error}</p> : ""}
          <div className={styles.title}>
            <span>Tiêu đề: &nbsp;</span>
            <TextField
              size="small"
              style={{ width: "85%" }}
              label=" "
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.info}>Mô tả công việc:</div>
            <TextField
              size="small"
              multiline
              fullWidth
              label=" "
              rows={5}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className={styles.info}>Thông tin chi tiết công việc</div>
          <TextField
            label="Kỹ năng yêu cầu"
            placeholder="Ví dụ: sửa chữa, đi chợ, chăm sóc người bệnh, ..."
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setRequiredSkill(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Số điện thoại liên lạc"
              variant="outlined"
              onChange={(e) => setContact(e.target.value)}
            />
            <FormControl style={{ width: "48%" }}>
              <InputLabel>Khu vực</InputLabel>
              <Select
                label="Khu vực"
                defaultValue="Thành phố Hà Nội"
                onChange={(e) => setArea(e.target.value)}
              >
                {choiceArea.map((data) => (
                  <MenuItem value={data.name}>{data.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <TextField
            label="Thời gian giúp đỡ"
            InputLabelProps={{ shrink: true }}
            type="datetime-local"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setTime(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl style={{ width: "48%" }}>
              <InputLabel>Loại kỹ năng</InputLabel>
              <Select
                label="Loại kỹ năng"
                defaultValue={1}
                onChange={(e) => setType(e.target.value)}
              >
                {types.map((data) => (
                  <MenuItem value={data.value}>{data.label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              disabled={isDisabled}
              label="Phí trả (vnđ)"
              helperText="Chỉ yêu cầu đối với loại kỹ năng chuyên nghiệp"
              variant="outlined"
              style={{ width: "50%" }}
              onChange={(e) => setFee(e.target.value)}
            />
          </div>

          <Button variant="contained" fullWidth style={{ margin: "10px 0" }} onClick={onCreateJob}>
            Tạo mới
          </Button>
          <Button variant="outlined" fullWidth href="/jobs">
            Hủy bỏ
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
