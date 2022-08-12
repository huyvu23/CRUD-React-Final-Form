import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon, Table } from "rsuite"
import { lengthMenu } from "../../../commonConst/lengthMenu"
import styles from "./TableListProducts.module.scss"

const { Column, HeaderCell, Cell, Pagination } = Table
const baseURL = "https://62e38befb54fc209b88b1670.mockapi.io/api/products"

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
  const deleteItem = (e, id) => {
    e.preventDefault()
    axios.delete(`${baseURL}/${parseInt(id)}`).then((res) => {
      getListProducts()
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
          <Column width={200}>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Hãng</HeaderCell>
            <Cell dataKey="manufacturer" />
          </Column>
          <Column width={200}>
            <HeaderCell>Sản phẩm</HeaderCell>
            <Cell dataKey="model" />
          </Column>
          <Column width={200}>
            <HeaderCell>Nền tảng</HeaderCell>
            <Cell dataKey="platform" />
          </Column>
          <Column width={200}>
            <HeaderCell>Số Serial</HeaderCell>
            <Cell dataKey="serial_number" />
          </Column>
          <Column width={200}>
            <HeaderCell>Phiên bản</HeaderCell>
            <Cell dataKey="version" />
          </Column>
          <Column width={200}>
            <HeaderCell>Chức năng</HeaderCell>
            <Cell>
              {(rowData) => {
                return (
                  <span>
                    <Link to={"/updateProduct"} className={styles.buttonEdit}>
                      <Icon className={styles.edit} icon="pencil" />
                    </Link>
                    <span
                      onClick={(e) => {
                        deleteItem(e, rowData.id)
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
