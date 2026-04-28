import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    console.log("check res backend: ", res)
    if (res.data) {
      // nếu biến res.data tồn tại thì check
      //tiếp res.data.data có tồn tại hay không
      //dùng antd, nếu có data trả về thì bắn ra thông báo:
      api.success({
        message: "create user",
        description: "Tạo user thành công",
      });
    }

    console.log("check res react: ", res.data);
  };
  return (
    <div
      style={{
        margin: "20px 0",
      }}
      className="user-form"
    >
      {contextHolder}
      <div
        style={{
          gap: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div>
          <Button type="primary" onClick={handleClickBtn}>
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
