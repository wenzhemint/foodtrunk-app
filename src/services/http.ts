import axios from "axios";
import {
  BASE_URL
} from '../config/constants';

const httpInterceptor = axios.create();

// http interceptor START
httpInterceptor.interceptors.request.use(function (config) {
  // Do something before request is sent

  config.baseURL =  BASE_URL;
  config.headers["Content-type"] = "application/json";

  return config;
}, function (error) {
  // Do something with request error


  return Promise.reject(error);
});

httpInterceptor.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  // console.log('interceptor works.');

  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  if(error.response.status) {
    switch (error.response.status) {
      case 401:
        return Promise.reject('Username or Password is wrong');
        break;
    
      default:
        break;
    }
  }

  console.log(error);

  if (error.response && error.response.data && error.response.data.error) {
    return Promise.reject(error.response.data.error);
  } else if (error.response && error.response.data && error.response.data.message) {
    return Promise.reject(error.response.data.message);
  }

  return Promise.reject(error.message);
});
// http intercepter END

export default httpInterceptor;