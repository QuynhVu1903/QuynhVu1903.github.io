import axios from "axios";

// Set config defaults when creating the instance - trước khi gửi request cho backend
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor - trước khi trả ra phản hồi (res) (su dung intercepter de format data truoc khi tra ve) cho frontend
instance.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    if(response.data && response.data.data) return response.data;
    return response; // thì trả về phản hồi ở đây 
  },
  function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    //debugger: tự dừng code và báo lỗi ở dòng nào 
    if(error.response && error.response.data) return error.response.data
    //trong trường hợp có lỗi sẽ ném ra phản hồi của backend
    //chứ không ném ra lỗi từ Promise ở dưới
    return Promise.reject(error);
  }
);

export default instance;