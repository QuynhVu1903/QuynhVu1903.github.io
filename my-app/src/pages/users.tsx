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
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0); //tổng số phần tử để mặc định là 0 vì chưa gọi API 

  useEffect(() => {
    loadUser(); // chỉ chạy 1 lần
  }, []);

  const loadUser = async () => { 
    //mặc định mỗi một lần gọi tới loadUser sẽ lấy current, pageSize dựa vào state của cha 
    const res = await fetchAllUserAPI(current, pageSize); //chờ fetchAllUserAPI thực hiện xong rồi trả vào biến res
    if(res.data){
      setDataUsers(res.data.result);
      //mấy cái ở dưới này bật F12, xem fetch, preview để biết trong data của res (backend) có những key value gì
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
      //có tham số rồi thì truyền xuống cho component con
    }
    
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} 
                 loadUser={loadUser}
                 current={current}
                 pageSize={pageSize}
                 total={total}
                 setCurrent={setCurrent}
                 setPageSize={setPageSize}
                 />

    </div>
  );
};
export default UsersPage;
