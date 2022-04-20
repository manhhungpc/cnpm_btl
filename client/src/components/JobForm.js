import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../styles/JobForm.module.css";

const areas = [
  {
    value: "Hanoi",
    label: "Hà Nội",
  },
  {
    value: "Hoabinh",
    label: "Hòa Bình",
  },
  {
    value: "Haiduong",
    label: "Hải Dương",
  },
];
const types = [
  {
    value: 0,
    label: "Thường",
  },
  {
    value: 1,
    label: "Chuyên nghiệp",
  },
];

export default function JobForm() {
  const [area, setArea] = useState("Hoabinh");
  const [type, setType] = useState(0);
  const isDisabled = type ? false : true;

  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <div className={styles.title}>
            <span>Tiêu đề: &nbsp;</span>
            <TextField size="small" variant="outlined" />
          </div>
          <div>
            <div>Mô tả công việc:</div>
            <TextField size="small" multiline fullWidth rows={5} />
          </div>

          <div className={styles.info}>Thông tin chi tiết công việc</div>
          <TextField
            label="Kỹ năng yêu cầu"
            placeholder="Ví dụ: sửa chữa, đi chợ, chăm sóc người bệnh, ..."
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField label="Số điện thoại liên lạc" variant="outlined" />
            <TextField
              select
              label="Khu vực"
              value={area}
              onChange={handleChangeArea}
              className={styles.inputArea}
            >
              {areas.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <TextField
            label="Thời gian giúp đỡ"
            InputLabelProps={{ shrink: true }}
            type="datetime-local"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              select
              label="Loại kỹ năng"
              value={type}
              onChange={handleChangeType}
              style={{ width: "48%" }}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              disabled={isDisabled}
              label="Phí trả (vnđ)"
              helperText="Chỉ yêu cầu đối với loại kỹ năng chuyên nghiệp"
              variant="outlined"
              style={{ width: "50%" }}
            />
          </div>

          <Button variant="contained" fullWidth style={{ margin: "10px 0" }}>
            Tạo mới
          </Button>
          <Button variant="outlined" fullWidth>
            Hủy bỏ
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
