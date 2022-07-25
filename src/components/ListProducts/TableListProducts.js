import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./TableListProducts.module.scss"
import { lengthMenu } from "../../commonConst/lengthMenu"
import { Table, Icon } from "rsuite"
const { Column, HeaderCell, Cell, Pagination } = Table

function TableListProducts() {
  const [fakeData, setFakeData] = useState([])
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get("https://random-data-api.com/api/device/random_device?size=30").then((res) => {
      setTimeout(() => {
        return setFakeData(res.data)
      }, 2000)
    })
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
              function handleAction() {
                alert(`id:${rowData.id}`)
              }
              return (
                <span>
                  <a className={styles.buttonEdit} onClick={handleAction}>
                    <Icon className={styles.edit} icon="pencil" />
                  </a>
                  <a onClick={handleAction}>
                    <Icon className={styles.remove} icon="trash" />
                  </a>
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
          return setPage(1), setDisplayLength(dataKey)
        }}
      />
    </div>
  )
}

export default TableListProducts
