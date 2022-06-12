import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API,
});

request.interceptors.request.use(
  async config => {
    const token = sessionStorage.getItem('access_token')
    config.headers = { 'authorization': token };
    return config;
  },
  error => {
    Promise.reject(error)
  });

request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err)
    if (err.response?.status === 403) {
      sessionStorage.removeItem('access_token')
      window.location.href = "/"
    } 
    throw new Error(err.message || 'Unexpected error')
    
  }
)

export default request;