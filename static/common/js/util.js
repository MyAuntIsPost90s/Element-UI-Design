import Axios from 'axios'
import Config from './config.js'
import {Message, Loading} from 'element-ui';

//网关
let Gateway = {
  get(params) {
    return new Promise(function (resolve, reject) {
      //loading
      let loadingHandler = Loading.service({
        lock: true,
        text: 'loading...'
      });
      //请求数据
      Axios.get(Config.URL_HEAD + params.url, {
        headers: getHeaders(),
        params: params.data
      }).then(function (resp) {
        loadingHandler.close();
        if (resp.code != 1) {
          Message.error(resp.msg);
          reject(resp.msg);
          return;
        }
        resolve(resp);
      });
    });
  },
  post(params) {
    return new Promise(function (resolve, reject) {
      //loading
      let loadingHandler = Loading.service({
        lock: true,
        text: 'loading...'
      });
      //请求数据
      Axios.post(Config.URL_HEAD + params.url, {
        data: params.data
      }, {
        headers: getHeaders(),
      }).then(function (resp) {
        loadingHandler.close();
        if (resp.code != 1) {
          Message.error(resp.msg);
          reject(resp.msg);
          return;
        }
        resolve(resp);
      })
    });
  },
  getCookie(key) {
    var strCookie = document.cookie;//获取cookie字符串
    var arrCookie = strCookie.split("; ");//分割
    //遍历匹配
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("=");
      if (arr[0] == name) {
        return arr[1];
      }
    }
    return "";
  }
}

//字段校验
let FormValid = {
  check(param) {
    if (param && param.valid) {
      for (let feild in param) {
        let val = param[feild];
        let validStr = param.valid[feild];
        if (!validStr) {
          continue;
        }
        let valid = eval('({' + validStr + '})');
        if (!valid) {
          continue;
        }
        if (!valid.name) {
          valid.name = feild;
        }
        if (valid.notEmpty === true) { //判断非空
          if (!val) {
            param.e = valid.name + '不能为空';
            return false;
          }
        }
        if (valid.length) { //判断长度
          if (!val) {
            param.e = valid.name + '长度应在' + valid.length[0] + '到' + valid.length[1] + '之间';
            return false;
          }
          if (val.length < valid.length[0] || val.length > valid.length[1]) {
            param.e = valid.name + '长度应在' + valid.length[0] + '到' + valid.length[1] + '之间';
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }
}

function getHeaders() {
  let token = Gateway.getCookie(Config.TOKEN_KEY)
  return {
    AccessToken: token,
    AppKey: Config.APP_KEY
  }
}

export default {
  Gateway: Gateway,
  FormValid: FormValid,
}
