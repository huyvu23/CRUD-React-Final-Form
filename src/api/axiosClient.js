import axios from "axios"

const axiosClient = axios.create({
  baseURL: "http://localhost:8011/api/v1",
  header: {
    "content-type": "application/json",
  },
})

export default axiosClient
