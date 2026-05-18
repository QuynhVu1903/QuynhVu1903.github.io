import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
type Lprops = {
  loadUser: () => Promise<void>
}
const UserForm = (props: Lprops) => {
  const { loadUser } = props
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      // nếu biến res.data tồn tại thì check
      //tiếp res.data.data có tồn tại hay không
      //dùng antd, nếu có data trả về thì bắn ra thông báo:
      api.success({
        message: "create user",
        description: "Tạo user thành công",
      });
      //Tạo mới thành công => đóng modal
      setIsModalOpen(false)
      await loadUser();   
    } else {
      api.error({
        message: "Error create user",
        description: JSON.stringify(res.data?.message),
      });
    }

  };
  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  }
  return (
    <div
      style={{
        margin: "10px 0",
      }}
      className="user-form"
    >
      {contextHolder}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Create User
        </Button>
      </div>
      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"CREATE"}
      >
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
        </div>
      </Modal>
    </div>
  );
};
export default UserForm;
