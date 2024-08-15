import axios from 'axios';

const BASE_URL = 'http://codercba.com:1888/airbnb/api';
const TIMEOUT = 10000;

class WXRequest {
  constructor(baseURL, timeout) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      },
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({
      ...config,
      method: 'get',
    });
  }

  post(config) {
    return this.request({
      ...config,
      method: 'post',
    });
  }
}

const request = new WXRequest(BASE_URL, TIMEOUT);

export default request;
