import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.interceptors.request.use(
  function (config) {
    console.log('request', config);
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (config) {
    console.log('response', config);
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
