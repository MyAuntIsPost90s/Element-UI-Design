/**
 * 拦截器
 */
import Axios from 'axios'
import {Message} from 'element-ui';

function install() {
//请求拦截器
  Axios.interceptors.request.use(function (config) {
    return config;
  }, function (err) {
    console.log(err);
    Message.error("请求异常T^T");
  });

//响应拦截器
  Axios.interceptors.response.use(function (resp) {
    if (resp.data.msgcode == '0X0000') {
      //请在这里条状登陆
    }
    return resp.data;
  }, function (err) {
    console.log(err);
    Message.error("响应异常T^T");
  });
}

export default {
  install
}
