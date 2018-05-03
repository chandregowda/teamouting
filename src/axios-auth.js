import axios from 'axios'

let timeout = 1000 * 60 * 60;
axios.defaults.timeout = timeout;
const axiosInstance = axios.create({
  baseURL: 'https://rti.corp.yodlee.com:3400'
})

export default axiosInstance
