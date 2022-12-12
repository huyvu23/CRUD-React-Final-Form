import axiosClient from "./axiosClient"

class PositionApi {
  getAllPosition = () => {
    try {
      const url = "/positions"
      return axiosClient.get(url)
    } catch (error) {
      console.error(error)
    }
  }
}

const positionApi = new PositionApi()
export default positionApi
