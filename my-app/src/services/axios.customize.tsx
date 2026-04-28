import axios from "axios";

// Set config defaults when creating the instance - trước khi gửi request cho backend
const instance = axios.create({
  baseURL: 'http://localhost:8080',
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

// Add a response interceptor - trước khi trả ra phản hồi cho frontend
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
    return Promise.reject(error);
  }
);

export default instance;