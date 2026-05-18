import { Input, Form, Button, notification } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

//gọi hàm form.submit() => tự động gọi hàm onFinish => ném ra giá trị của form
type FieldType = {
  fullname: string;
  email: string;
  password: string;
  phone: string;
};

const RegisterPage = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const onFinish = async (values: FieldType) => {
    console.log("check value: ", values);

    //call API để tạo mới người dùng
    const res = await registerUserAPI(
      values.fullname,
      values.email,
      values.password,
      values.phone,
    );
    if (res.data) {
      // nếu biến res.data tồn tại thì báo
      api.success({
        message: "Register user",
        description: "Đắng ký user thành công",
      });
      //sau khi tạo mới người dùng thành công thì chuyển hướng người dùng sang trang login
      navigate("/login");
    } else {
      api.error({
        message: "Error register user",
        description: JSON.stringify(res.data?.message),
      });
    }
  };
  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      {contextHolder}

      <div
        style={{
          margin: "50px",
        }}
        className="register-form"
      >
        <Form.Item<FieldType>
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              min: 6,
              message: "Password must be at least 6 characters!",
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
              message:
                "Password must contain uppercase, lowercase and special character!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              pattern: new RegExp(/\d+/g),
              message: "Wrong format!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div>
          <Button onClick={() => form.submit()} type="primary">
            Register
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default RegisterPage;
