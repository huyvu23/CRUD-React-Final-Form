import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Icon } from "rsuite"
import styles from "./ListCustomer.module.scss"
import ModalCreateAndUpdate from "./ModalCreateAndUpdate"
import TableListCustomer from "./TableListCustomer"
const baseURL = "http://localhost:8081/api/v1/accounts"
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

  const getListAccounts = () => {
    axios.get(baseURL).then((res) => {
      setTimeout(() => {
        return setListCustomers(res.data) & setLoading(false)
      }, 2000)
    })
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
            />
          )}

          <TableListCustomer
            listCustomers={listCustomers}
            loading={loading}
            baseURL={baseURL}
            getListAccounts={getListAccounts}
            handleUpdate={handleUpdate}
          />
        </div>
      </section>
    </>
  )
}

export default ListCustomers
