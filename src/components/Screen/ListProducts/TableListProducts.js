import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon, Notification, Table } from "rsuite"
import { lengthMenu } from "../../../commonConst/lengthMenu"
import styles from "./TableListProducts.module.scss"
// Destructuring of Table
const { Column, HeaderCell, Cell, Pagination } = Table
const baseURL = "http://localhost:8080/api/v1/departments"

function TableListProducts() {
  const [loading, setLoading] = useState(true)
  const [fakeData, setFakeData] = useState([])
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)

  //! getListProducts
  const getListProducts = () => {
    axios.get(`${baseURL}`).then((res) => {
      setTimeout(() => {
        return setFakeData(res.data) & setLoading(false)
      }, 2000)
    })
  }

  //! Function Delete
  const deleteItem = (id) => {
    axios.delete(`${baseURL}/delete/${parseInt(id)}`).then((res) => {
      if (res.status === 200) {
        Notification.success({
          title: "Xoá thành công",
        })
        getListProducts()
      } else {
        Notification.error({
          title: "Xoá thất bại",
        })
      }
    })
  }

  useEffect(() => {
    getListProducts()
  }, [])

  let getData = () => {
    return fakeData.filter((v, i) => {
      const start = displayLength * (page - 1)
      const end = start + displayLength
      return i >= start && i < end
    })
  }
  const data = getData()

  return (
    <>
      <div className={styles.wrapper}>
        <Table height={420} data={data} loading={loading}>
          <Column width={500}>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={500}>
            <HeaderCell>Tên phòng ban</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column width={200}>
            <HeaderCell>Chức năng</HeaderCell>
            <Cell>
              {(rowData) => {
                return (
                  <span>
                    <Link to={`/updateProduct/${rowData.id}`} className={styles.buttonEdit}>
                      <Icon className={styles.edit} icon="pencil" />
                    </Link>
                    <span
                      onClick={() => {
                        deleteItem(rowData.id)
                      }}
                    >
                      <Icon className={styles.remove} icon="trash" />
                    </span>
                  </span>
                )
              }}
            </Cell>
          </Column>
        </Table>
        <Pagination
          lengthMenu={lengthMenu}
          activePage={page}
          displayLength={displayLength}
          total={fakeData.length}
          onChangePage={(dataKey) => {
            return setPage(dataKey)
          }}
          onChangeLength={(dataKey) => {
            return setPage(1) & setDisplayLength(dataKey)
          }}
        />
      </div>
    </>
  )
}

export default TableListProducts
