import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import { Icon, Notification, Table } from "rsuite"
import { lengthMenu } from "../../../commonConst/lengthMenu"
import styles from "./TableListOrder.module.scss"

const { Column, HeaderCell, Cell, Pagination } = Table
function TableListOrder(props) {
  const { fakeData, setFakeData, handleUpdate, indexUpdate } = props
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)

  let getData = () => {
    return fakeData?.filter((v, i) => {
      const start = displayLength * (page - 1)
      const end = start + displayLength
      return i >= start && i < end
    })
  }
  const data = getData()

  const handleDelete = (index) => {
    let listOrder = JSON.parse(localStorage.getItem("listOrder"))
    listOrder.splice(index, 1)
    localStorage.setItem("listOrder", JSON.stringify(listOrder))
    setFakeData(listOrder)
    Notification.success({
      title: "Xoá dữ liệu thành công",
    })
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Table height={420} data={data}>
          <Column width={200}>
            <HeaderCell>Mã đơn hàng</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Tên khách hàng</HeaderCell>
            <Cell dataKey="nameCustomer" />
          </Column>
          <Column width={200}>
            <HeaderCell>SĐT</HeaderCell>
            <Cell dataKey="numberPhone" />
          </Column>
          <Column width={200}>
            <HeaderCell>Địa chỉ giao hàng</HeaderCell>
            <Cell dataKey="address" />
          </Column>
          <Column width={200}>
            <HeaderCell>Tên sản phẩm</HeaderCell>
            <Cell dataKey="nameProduct" />
          </Column>
          <Column width={200}>
            <HeaderCell>Số lượng</HeaderCell>
            <Cell dataKey="amount" />
          </Column>
          <Column width={200}>
            <HeaderCell>Đơn giá sản phẩm</HeaderCell>
            <Cell dataKey="price" />
          </Column>
          <Column width={200}>
            <HeaderCell>Thành tiền</HeaderCell>
            <Cell dataKey="money" />
          </Column>
          <Column width={100}>
            <HeaderCell>Chức năng</HeaderCell>
            <Cell>
              {(rowData, index) => {
                return (
                  <span>
                    <span
                      style={{ marginRight: 15, cursor: "pointer" }}
                      onClick={() => {
                        handleUpdate(rowData)
                        indexUpdate(index)
                      }}
                    >
                      <Icon icon="pencil" />
                    </span>
                    <span style={{ cursor: "pointer" }} onClick={() => handleDelete(index)}>
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
          total={fakeData?.length}
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
TableListOrder.propTypes = {
  fakeData: PropTypes.object,
  setFakeData: PropTypes.func,
}
export default memo(TableListOrder)
