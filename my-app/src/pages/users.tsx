import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    console.log("run useEffect 111");
    loadUser(); // chỉ chạy 1 lần
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI(); //chờ fetchAllUserAPI thực hiện xong rồi trả vào biến res
    setDataUsers(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} />
    </div>
  );
};
export default UsersPage;
