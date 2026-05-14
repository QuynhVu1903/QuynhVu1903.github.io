import { Button, Drawer, notification } from "antd";
import type { DataType } from "../../pages/users";
import { useState, type ChangeEvent } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

type Props = {
  //   isModalUpdateOpen: boolean;
  //   setIsModalUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;

  dataDetail: DataType | null;
  setDataDetail: React.Dispatch<React.SetStateAction<DataType | null>>;

  isDetailOpen: boolean;
  setIsDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;

  loadUser: () => Promise<void>
};

const ViewUserDetail = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // lưu file vừa upload. File là object chứa thông tin thực của file
  const [preview, setPreview] = useState<string | null>(null); // đường link URL để hiển thị file. Hiển thị ảnh trong <img>  (blob URL)
  const [api, contextHolder] = notification.useNotification();
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } = props;
  console.log("check dataDetail ", dataDetail);
  const handleOnchangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return; // thoát khỏi funct này
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // react lưu lại file vừa upload
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    if (!dataDetail) return;
    // quá trình gọi api là bất đồng bộ
    //step 1: upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar"); // selectedfile là file mình upload
    if (resUpload.data) {
      //success
      const newAvatar = resUpload.data.fileUploaded;
      //update lại user: avt mới sẽ được lưu vào api, sau đó fetch api để cập nhật avt mới
      //mỗi lần gọi API đều phải dùng await
      const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone )
      if(resUpdateAvatar.data){
        //đóng xem chi tiết
        setIsDetailOpen(false);
        //clear data react
        setSelectedFile(null);
        setPreview(null);
        await loadUser();

        api.success({
        message: "Update user avatar",
        description: "Cập nhật avatar thành công",
      });
      }else {
        api.error({
        message: "Error upload avatar",
        description: JSON.stringify(resUpdateAvatar.data?.message),
      });
      }
    } else {
      //failed
      api.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.data?.message),
      });
    }
    console.log("check resUpload", resUpload);
  };

  console.log("check file: ", preview);

  return (
    
    <Drawer
      width={"30vw"}
      title="Chi tiết User"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {contextHolder}
      {dataDetail ? (
        <>
          <div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "40px" }}>
              <div
                style={{
                  marginTop: "10px",
                  height: "150px",
                  width: "150px",
                  border: " 1px solid #ccc",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
                />
              </div>
              <div style={{ alignSelf: "center" }}>
                <p>
                  <b>Id:</b> {dataDetail._id}
                </p>
                <br />
                <p>
                  <b>Full Name:</b> {dataDetail.fullName}
                </p>
                <br />
                <p>
                  <b>Email:</b> {dataDetail.email}
                </p>
                <br />
                <p>
                  <b>Phone Number:</b> {dataDetail.phone}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "right",
                    paddingLeft: "20px",
                  }}
                >
                  <label
                    style={{
                      textAlign: "right",
                      display: "block",
                      width: "fit-content",
                      marginTop: "15px",
                      padding: "5px 10px",
                      background: "#3188e6",
                      color: "#FFFF",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    htmlFor="btnUpload"
                  >
                    Upload Avatar
                  </label>
                </div>
                <div>
                  <input
                    type="file"
                    hidden
                    id="btnUpload"
                    onChange={handleOnchangeFile}
                  />
                </div>
              </div>
              {preview && (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "10px",
                        height: "150px",
                        width: "150px",
                        border: " 1px solid #ccc",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          objectFit: "contain",
                          height: "100%",
                          width: "100%",
                        }}
                        src={preview}
                      />
                    </div>
                    <div style={{ paddingLeft: "40px" }}>
                      <Button
                        type="primary"
                        onClick={() => {
                          handleUpdateUserAvatar();
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
