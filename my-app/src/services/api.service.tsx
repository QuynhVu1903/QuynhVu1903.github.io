// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (
  fullName: string,
  email: string,
  password: string,
  phone: string,
) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};

const updateUserAPI = (_id: string, fullName: string, phone: string) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data);
};

const deleteUserAPI = (id: string) => {
  const URL_BACKEND = `/api/v1/user/${id}`;
  return axios.delete(URL_BACKEND);
};

const fetchAllUserAPI = () => {
  {
    const URL_BACKEND = "/api/v1/user?current=1&pageSize=1";
    return axios.get(URL_BACKEND);
  }
};
const handleUploadFile = (file: string, folder: string) => {
  //file: file muốn lưu, folder: file muốn lưu vào folder nào
  const URL_BACKEND = `/api/v1/file/upload`;
  const config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  //truyền vào key và value - tên biến và giá trị (file input truyền vào) của nó
  bodyFormData.append("fileImg", file);
  return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (
  avatar: string,
  _id: string,
  fullName: string,
  phone: string,
) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data);
};

export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
  handleUploadFile,
  updateUserAvatarAPI,
};
