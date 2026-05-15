import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import type { TableProps } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import type { DataType } from "../../pages/users";
import { deleteUserAPI } from "../../services/api.service";

type Dprops = {
  dataUsers: DataType[];
  loadUser: () => Promise<void>;
  current: number;
  pageSize: number;
  total: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const UserTable = (props: Dprops) => {
  const {
    dataUsers,
    loadUser,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState<DataType | null>(null);
  const [dataDetail, setDataDetail] = useState<DataType | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleDeleteUser = async (id: string) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      // nếu biến res.data tồn tại thì báo
      api.success({
        message: "Delete user",
        description: "Xóa user thành công",
      });
      //Xóa thành công
      await loadUser(); // chờ để fetch lại bảng user
    } else {
      api.error({
        message: "Error delete user",
        description: JSON.stringify(res.message),
      });
    }
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "STT",
      render: (_, record, index) => {
        console.log("check index:", index);
        //render từng record (bản ghi của các id)
        return <>{index + 1}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "_id", //name: key
      render: (_, record) => {
        //render từng record (bản ghi của các id)
        return (
          <>
            <a
              href="#"
              onClick={() => {
                setDataDetail(record);
                setIsDetailOpen(true);
              }}
            >
              {record._id}
            </a>
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
          <Popconfirm
            title="Xóa người dùng"
            description="Bạn chắc chắn xóa user này?"
            onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("check all: ", { pagination, filters, sorter, extra });
  };

  return (
    <>
      {contextHolder}
      <Table<DataType>
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={{
          current: current, //đang đứng tại trang bao nhiêu
          pageSize: pageSize, //lấy tối đa bao nhiêu phần tử 1 lần
          showSizeChanger: true,
          total: total, // tổng số phần tử
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} users
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        loadUser={loadUser}
      />
    </>
  );
};
export default UserTable;
