import React from "react"
import { Link } from "react-router-dom"
import { Button, Icon, Nav, Sidenav } from "rsuite"
import styles from "./Side.module.scss"

function Side() {
  return (
    <div>
      <Sidenav>
        <div className={styles.sideContainer}>
          <Sidenav.Body className={styles.sideBody}>
            <Nav className={styles.navContainer}>
              <Nav.Item className={styles.operator}>
                <Icon icon="bar-chart"></Icon>
                <p>Bảng điều khiển</p>
              </Nav.Item>
              <Link to="/listProducts">
                <Nav.Item className={styles.listOptions}>
                  <Icon icon="database"></Icon>
                  <p>Danh sách phòng ban</p>
                </Nav.Item>
              </Link>
              <Link to="listCustomers">
                <Nav.Item className={styles.listOptions}>
                  <Icon icon="user"></Icon>
                  <p>Khách hàng</p>
                </Nav.Item>
              </Link>
              <Link to="listOrder">
                <Nav.Item className={styles.listOptions}>
                  <Icon icon="file-text"></Icon>
                  <p>Đơn hàng</p>
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
          <Button className={styles.sideButton}>Thu Gọn</Button>
        </div>
      </Sidenav>
    </div>
  )
}

export default Side
