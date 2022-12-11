import axiosClient from "./axiosClient"

class DepartmentApi {
  getAllDepartment = () => {
    try {
      const url = "/departments"
      return axiosClient.get(url)
    } catch (error) {
      console.error(error)
    }
  }

  getDepartmentById = (params) => {
    try {
      const url = `/departments/${params}`
      return axiosClient.get(url)
    } catch (error) {
      console.error(error)
    }
  }
  //  ! ========================
  deleteDepartment = (params) => {
    try {
      const url = `departments/delete/${params}`
      return axiosClient.delete(url)
    } catch (error) {
      console.error(error)
    }
  }
}

const departmentApi = new DepartmentApi()
export default departmentApi
