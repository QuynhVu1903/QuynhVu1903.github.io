import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import type { TableProps } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";

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
}

type Dprops = {
  dataUsers: DataType[];
};

const UserTable = (props: Dprops) => {
  const { dataUsers } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState<DataType | null>(null);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Id",
      dataIndex: "_id", //name: key
      render: (_, record) => {
        //render từng record (bản ghi của các id)
        return (
          <>
            <a href="#">{record._id}</a>
          </>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              console.log("check record", record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />{" "}
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};
export default UserTable;
