import axios from "axios"

const axiosClient = axios.create({
  baseURL: "http://localhost:8011/api/v1",
  header: {
    "Content-Type": "application/json; charset=utf-8",
  },
})

export default axiosClient
