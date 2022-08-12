import React, { useState, useEffect } from "react"
import { Icon, Button } from "rsuite"
import CreateOrderModal from "./CreateOrderModal"
import FillterModal from "./FillterModal"
import styles from "./ListOrder.module.scss"
import TableListOrder from "./TableListOrder"
function ListOrder() {
  const [show, setShow] = useState(false)
  const [formType, setFormType] = useState()
  const [listProducts, setListProducts] = useState([])
  const [listCustomers, setListCustomers] = useState([])

  const getListUsers = async () => {
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        setListCustomers(result.users)
      })
  }

  const getListProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setListProducts(result.products)
      })
  }

  useEffect(() => {
    getListUsers()
    getListProducts()
  }, [])

  const handleCreate = () => {
    setShow(true)
    setFormType("add")
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Danh sách đơn hàng</h1>
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
              {show && (
                <CreateOrderModal
                  show={show}
                  onHide={handleClose}
                  formType={formType}
                  listProducts={listProducts}
                  listCustomers={listCustomers}
                />
              )}
              <FillterModal />
            </div>
          </div>

          <TableListOrder />
        </div>
      </section>
    </>
  )
}

export default ListOrder
