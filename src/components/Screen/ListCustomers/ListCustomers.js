import React, { useEffect, useState } from "react"
import { Button, Icon } from "rsuite"
import accountApi from "../../../api/accountApi"
import styles from "./ListCustomer.module.scss"
import ModalCreateAndUpdate from "./ModalCreateAndUpdate"
import TableListCustomer from "./TableListCustomer"

function ListCustomers() {
  const [listCustomers, setListCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [formType, setFormType] = useState()
  const [rowData, setRowData] = useState()
  const handleCreate = () => {
    setShow(true)
    setFormType("create")
  }
  const handleClose = () => {
    setShow(false)
  }

  const handleUpdate = (rowData) => {
    setRowData(rowData)
    setShow(true)
    setFormType("update")
  }

  const getListAccounts = async () => {
    let res = await accountApi.getAllAccounts()
    setTimeout(() => {
      return setListCustomers(res.data) & setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    getListAccounts()
  }, [])

  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Danh sách Account</h1>
          <div className={styles.searchAndButton}>
            {/* SEARCH */}
            <div className={styles.searchContainer}>
              <div className={styles.search}>
                <input id="inputSearchProduct" type="text" placeholder="Search..." />
                <button className={styles.buttonSearch}>
                  <Icon icon="search" />
                </button>
              </div>
            </div>
            {/* Button */}
            <div className={styles.buttonContainer}>
              <Button
                size="lg"
                appearance="primary"
                style={{ marginRight: 15 }}
                onClick={handleCreate}
              >
                Thêm mới
              </Button>
            </div>
          </div>
          {show && (
            <ModalCreateAndUpdate
              show={show}
              onHide={handleClose}
              formType={formType}
              rowData={rowData}
              getListAccounts={getListAccounts}
            />
          )}

          <TableListCustomer
            listCustomers={listCustomers}
            loading={loading}
            getListAccounts={getListAccounts}
            handleUpdate={handleUpdate}
          />
        </div>
      </section>
    </>
  )
}

export default ListCustomers
