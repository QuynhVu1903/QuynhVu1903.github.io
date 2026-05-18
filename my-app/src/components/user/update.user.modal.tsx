import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.service";
import type { DataType } from "../../pages/users";


type Props = {
  isModalUpdateOpen: boolean;
  setIsModalUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;

  dataUpdate: DataType | null;
  setDataUpdate: Dispatch<SetStateAction<DataType | null>>;

  loadUser: () => Promise<void>;
};
const UpdateUserModal = (props: Props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadUser,
  } = props;

  useEffect(() => {
    console.log("check dataUpdate props");
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
      setEmail(dataUpdate.email);
      setPassword(dataUpdate.password);
    }
  }, [dataUpdate]);

  const [api, contextHolder] = notification.useNotification();
  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone); // thứ tự truyền vào (lần lượt), giá trị của tham số
    // là string, boolean.. chứ không quan trọng tên giống hay k

    if (res.data) {
      // nếu biến res.data tồn tại thì báo
      api.success({
        message: "Update user",
        description: "Cập nhật thành công",
      });
      //Tạo mới thành công => đóng modal
      setIsModalUpdateOpen(false);
      await loadUser();
    } else {
      api.error({
        message: "Error update user",
        description: JSON.stringify(res.data?.message),
      });
    }
  };
  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setPhone("");
    setId("");
    setDataUpdate(null); //để khi ấn nút đóng (resetAndCloseModal) thì làm cho dataUpdate = null =>
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Update a User"
        open={isModalUpdateOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"SAVE"}
      >
        <div
          style={{
            gap: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <span>Id</span>
            <Input value={id} disabled />
          </div>
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
    </>
  );
};

export default UpdateUserModal;
