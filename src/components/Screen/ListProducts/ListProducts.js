import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Icon } from "rsuite"
import FilterProduct from "./FilterProduct"
import styles from "./ListProducts.module.scss"
import TableListProducts from "./TableListProducts"
function ListProducts() {
  const [show, setShow] = useState(false)

  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Danh sách sản phẩm</h1>
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
            {/* BUTTON */}
            <div>
              <Link to="/createProduct">
                <Button className={styles.addButton}>Thêm mới</Button>
              </Link>
              <Button
                onClick={() => {
                  setShow(!show)
                }}
                className={styles.filterButton}
              >
                {show ? "Ẩn bộ lọc" : "Bộ lọc"}
              </Button>
            </div>
          </div>
          {show ? <FilterProduct /> : <></>}
          <TableListProducts />
        </div>
      </section>
    </>
  )
}

export default ListProducts
