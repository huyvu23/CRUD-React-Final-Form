import React from "react"
import { useState } from "react"
import { Icon, Button } from "rsuite"
import TableListProducts from "./TableListProducts"
import FilterProduct from "./FilterProduct"
import styles from "./ListProducts.module.scss"
import { Link } from "react-router-dom"
function ListProducts() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Danh sách sản phẩm</h1>
          <section className={styles.searchAndButton}>
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
          </section>
          {show ? <FilterProduct /> : ""}
          <TableListProducts />
        </div>
      </section>
    </div>
  )
}

export default ListProducts
