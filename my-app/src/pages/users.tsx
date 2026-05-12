import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

export interface DataType {
  _id: string;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  fullName: string;
  email: string;
  password: string;
  phone: string;
  avatar: string
}


const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUser(); // chỉ chạy 1 lần
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI(); //chờ fetchAllUserAPI thực hiện xong rồi trả vào biến res
    setDataUsers(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} 
                 loadUser={loadUser}/>
    </div>
  );
};
export default UsersPage;
