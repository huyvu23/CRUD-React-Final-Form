import React from "react"
import { useState } from "react"
import { Icon, Button } from "rsuite"
import TableListProducts from "./TableListProducts"
import styles from "./ListProducts.module.scss"
function ListProducts() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Danh sách sản phẩm</h1>
          <section className={styles.searchAndButton}>
            {/* Search */}
            <div className={styles.searchContainer}>
              <div className={styles.search}>
                <input id="inputSearchProduct" type="text" placeholder="Search..." />
                <button className={styles.buttonSearch}>
                  <Icon icon="search" />
                </button>
              </div>
            </div>
            <div>
              <Button className={styles.addButton}>Thêm mới</Button>
              <Button
                onClick={() => {
                  setShow(!show)
                }}
                className={styles.filterButton}
              >
                {show ? "Bộ lọc" : "Ẩn bộ lọc"}
              </Button>
            </div>
          </section>
          <TableListProducts />
        </div>
      </section>
    </div>
  )
}

export default ListProducts
