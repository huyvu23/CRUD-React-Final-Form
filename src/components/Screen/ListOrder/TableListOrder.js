import React, { useState, useEffect } from "react"
import { Table, Icon } from "rsuite"
import styles from "./TableListOrder.module.scss"
import { lengthMenu } from "../../../commonConst/lengthMenu"
import CreateOrderModal from "./CreateOrderModal"

const { Column, HeaderCell, Cell, Pagination } = Table
function TableListOrder() {
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false)
  const [fakeData, setFakeData] = useState()

  // let getData = () => {
  //   return fakeData.filter((v, i) => {
  //     const start = displayLength * (page - 1)
  //     const end = start + displayLength
  //     return i >= start && i < end
  //   })
  // }
  // const data = getData()

  const handleUpdate = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <div className={styles.wrapper}>
        <Table height={420}>
          <Column width={200}>
            <HeaderCell>Mã đơn hàng</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Tên khách hàng</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>SĐT</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Địa chỉ giao hàng</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Tên sản phẩm</HeaderCell>
            <Cell dataKey="title" />
          </Column>
          <Column width={200}>
            <HeaderCell>Số lượng</HeaderCell>
            <Cell dataKey="stock" />
          </Column>
          <Column width={200}>
            <HeaderCell>Đơn giá sản phẩm</HeaderCell>
            <Cell dataKey="price" />
          </Column>
          <Column width={200}>
            <HeaderCell>Thành tiền</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={100}>
            <HeaderCell>Chức năng</HeaderCell>
            <Cell>
              {(rowData) => {
                return (
                  <span>
                    <span style={{ marginRight: 15, cursor: "pointer" }} onClick={handleUpdate}>
                      <Icon icon="pencil" />
                      {show && (
                        <CreateOrderModal show={show} onHide={handleClose} rowData={rowData} />
                      )}
                    </span>
                    <span style={{ cursor: "pointer" }}>
                      <Icon icon="trash" />
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
          // total={fakeData.length}
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

export default TableListOrder
