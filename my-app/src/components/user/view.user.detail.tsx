import { Button, Drawer } from "antd";
import type { DataType } from "../../pages/users";
import { useState, type ChangeEvent } from "react";

type Props = {
  //   isModalUpdateOpen: boolean;
  //   setIsModalUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;

  dataDetail: DataType | null;
  setDataDetail: React.Dispatch<React.SetStateAction<DataType | null>>;

  isDetailOpen: boolean;
  setIsDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;

  //   loadUser: () => Promise<void>;
};

const ViewUserDetail = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState<NonNullable<File>>(); // lưu file vừa upload
  const [preview, setPreview] = useState(); // đường link URL để hiển thị file

  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
  console.log("check dataDetail ", dataDetail);
  const handleOnchangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return; // thoát khỏi funct này
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
    console.log("check file: ", file);
  };
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
      {dataDetail ? (
        <>
          <div
            style={{ display: "flex", gap: "40px", flexDirection: "column" }}
          >
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
                <input
                  type="file"
                  hidden
                  id="btnUpload"
                  onChange={handleOnchangeFile}
                />
              </div>
              {/* <div style={{ display: "flex", justifyContent: "right" }}><Button type="primary">Upload Avatar</Button></div> */}
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
