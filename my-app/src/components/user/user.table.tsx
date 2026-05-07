import { Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
type Dprops = {
  dataUsers: never[]
}

const UserTable = (props: Dprops) => {
  const { dataUsers } = props;

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Id",
      dataIndex: "_id", //name: key
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  

  console.log("run render 000");
  return (
    <Table<DataType> columns={columns} dataSource={dataUsers} rowKey={"_id"} />
  );
};
export default UserTable;
