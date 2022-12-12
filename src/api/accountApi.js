import axiosClient from "./axiosClient"

class AccountApi {
  getAllAccounts = () => {
    try {
      const url = "/accounts"
      return axiosClient.get(url)
    } catch (error) {
      console.error(error)
    }
  }

  updateAccount = (id, params) => {
    try {
      const url = `/accounts/update/${id}`
      return axiosClient.put(url, params)
    } catch (error) {
      console.error(error)
    }
  }

  deleteAccount = (params) => {
    try {
      const url = `accounts/delete/${params}`
      return axiosClient.delete(url)
    } catch (error) {
      console.error(error)
    }
  }
}

const accountApi = new AccountApi()
export default accountApi
