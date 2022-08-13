import React, { useState } from "react"
import { Button, Col, Drawer, Form as RSform, Row } from "rsuite"
import { Field, Form } from "react-final-form"
import { InputField, InputPickerField } from "../../../components/CustomField/index"

function FillterModal(props) {
  const { listProducts, listCustomers, setFakeData } = props

  const listNameCus = []
  listCustomers.forEach((item) => {
    return listNameCus.push({ value: item.firstName, label: item.firstName })
  })

  const listNameProducts = []
  listProducts.forEach((item) => {
    return listNameProducts.push({ value: item.title, label: item.title })
  })
  const [show, setShow] = useState(false)
  const close = () => setShow(false)
  const toogleDrawer = () => setShow(true)

  const handleSubmit = (values) => {
    let listOrder = JSON.parse(localStorage.getItem("listOrder"))
    let listFilter = []
    listFilter = listOrder.filter(
      (item) =>
        item.id.includes(values.id) ||
        item.nameCustomer.includes(values.nameCustomer) ||
        item.nameProduct.includes(values.nameProduct)
    )

    return setFakeData(listFilter) & close()
  }
  return (
    <>
      <Button onClick={() => toogleDrawer()}>Bộ lọc</Button>
      <Drawer show={show} onHide={() => close()}>
        <Drawer.Header>
          <Drawer.Title>Lọc sản phẩm</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, values, submitting, pristine }) => (
              <RSform onSubmit={handleSubmit}>
                <Row>
                  <Col lg={10}>
                    <Field
                      label="Mã đơn hàng"
                      name="id"
                      placeholder="Mã đơn hàng"
                      component={InputField}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <Field
                      label="Tên khách hàng"
                      name="nameCustomer"
                      placeholder="Tên khách hàng"
                      inputvalue={listNameCus}
                      component={InputPickerField}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <Field
                      label="Tên sản phẩm"
                      name="nameProduct"
                      placeholder="Chọn"
                      inputvalue={listNameProducts}
                      component={InputPickerField}
                    />
                  </Col>
                </Row>
                <Button
                  type="submit"
                  color="blue"
                  style={{ marginTop: 20 }}
                  disabled={submitting || pristine}
                >
                  Lọc
                </Button>
              </RSform>
            )}
          />
        </Drawer.Body>
      </Drawer>
    </>
  )
}

export default FillterModal
