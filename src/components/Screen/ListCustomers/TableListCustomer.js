import React, { useState } from "react"
import { Icon, Notification, Table } from "rsuite"
import accountApi from "../../../api/accountApi"
import { lengthMenu } from "../../../commonConst/lengthMenu"
import styles from "./TableListCustomer.module.scss"

const { Column, HeaderCell, Cell, Pagination } = Table
function TableListCustomer(props) {
  // DESTRUCTURING OF PROPS
  const { loading, listCustomers, getListAccounts, handleUpdate } = props
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)

  let getData = () => {
    return listCustomers.filter((v, i) => {
      const start = displayLength * (page - 1)
      const end = start + displayLength
      return i >= start && i < end
    })
  }
  const data = getData()

  const deleteAccount = async (id) => {
    let res = await accountApi.deleteAccount(parseInt(id))
    if (res.status === 200) {
      Notification.success({
        title: "Xoá thành công",
      })
      getListAccounts()
    } else {
      Notification.error({
        title: "Xoá thất bại",
      })
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Table height={420} data={data} loading={loading}>
          <Column width={200}>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>
          <Column width={200}>
            <HeaderCell>UserName</HeaderCell>
            <Cell dataKey="username" />
          </Column>
          <Column width={200}>
            <HeaderCell>FullName</HeaderCell>
            <Cell dataKey="fullname" />
          </Column>
          <Column width={200}>
            <HeaderCell>Department</HeaderCell>
            <Cell dataKey="department" />
          </Column>
          <Column width={200}>
            <HeaderCell>Position</HeaderCell>
            <Cell dataKey="position" />
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
                      }}
                    >
                      <Icon icon="pencil" />
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        deleteAccount(rowData.id)
                      }}
                    >
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
          total={listCustomers.length}
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

export default TableListCustomer
