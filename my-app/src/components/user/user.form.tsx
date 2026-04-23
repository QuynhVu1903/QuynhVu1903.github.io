import { Button, Input } from "antd";

const UserForm = () => {
  return (
    <div
      style={{
        margin: "20px 0",
      }}
      className="user-form"
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
          <Input />
        </div>
        <div>
          <span>Email</span>
          <Input />
        </div>
        <div>
          <span>Password</span>
          <Input.Password />
        </div>
        <div>
          <span>Phone number</span>
          <Input />
        </div>
        <div>
          <Button type="primary">Create User</Button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
