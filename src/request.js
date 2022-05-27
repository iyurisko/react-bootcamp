import axios from 'axios';

const accessToken = localStorage.getItem('access_token');

const request = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:7777',
  withCredentials: true,
  headers: {
    'authorization': accessToken
  }
});

request.interceptors.response.use(
  (res ) => res, 
  (err) => {

    if (err.response?.status === 403) {
      localStorage.removeItem('access_token')
      window.location.href = "/"
    }
    throw new Error(err.message || 'Unexpected error')
  }
)

export default request;