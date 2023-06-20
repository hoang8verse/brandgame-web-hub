import axios from 'axios';
import curlirize from 'axios-curlirize';

const API_URL = process.env.REACT_APP_API_URL;

let store;

export const injectStore = _store => {
  store = _store;
};

const client = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
curlirize(client);

client.interceptors.request.use(
  async config => {
    // console.log('%cREQUEST ::: ', 'color:purple', config.url);
    // Do something before request is sent
    const {session} = store.getState();
    let {token} = session;
    // console.log("store.getState() ============  " , store.getState())
    let _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMDNmODIzLTJjYWQtNDI0ZC05OWFiLTliOWE3MGJiODNmNSIsImdhbWVJZCI6IjQ3NmQyOWRmLTM2YTEtNGQ2Zi1hYmRmLTJmZGFmMDdmNjgxOCIsImlhdCI6MTY2NjA4OTg4MywiZXhwIjoxNjY2NDQ5ODgzfQ.DDvREp7h3Lw3MZ4sTUwVufDt5voorCAB4JA7rm8GYi8";
    if(!token){
      token = _token;
    }
    const cloneConfig = {...config};
    if (token) {
      // cloneConfig.headers.authorization = `Bearer ${token}`;
    }

    // Ngôn ngữ
    // const locale = "EN";
    // cloneConfig.headers.locale = locale;

    return cloneConfig;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
client.interceptors.response.use(
  response => {
    // console.log('%cRESPONSE: ', 'color:green', response);
    return response;
  },
  async error => {
    // console.log('API ERROR:', error.response);
    // console.log(JSON.stringify(error));
    if (error?.response?.status === 401) {

      return Promise.resolve(error);

    }
    if (error?.response?.status === 500) {
      console.log('Có lỗi khi giao tiếp với hệ thống!');
      return Promise.resolve(error.response);
    }

    return Promise.resolve(error?.response);
  },
);

export default client;
