import React, { useState } from "react"
import { Button, Drawer } from "rsuite"

function FillterModal() {
  const [show, setShow] = useState(false)
  const close = () => setShow(false)
  const toogleDrawer = () => setShow(true)
  return (
    <>
      <Button onClick={() => toogleDrawer()}>Bộ lọc</Button>
      <Drawer show={show} onHide={() => close()}>
        <Drawer.Header>
          <Drawer.Title>Lọc sản phẩm</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <h1>Hello</h1>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={() => close()} appearance="primary">
            Thoát
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export default FillterModal
