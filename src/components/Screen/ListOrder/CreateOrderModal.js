import React from "react"
import { Form } from "react-final-form"
import { Button, Form as RSform, Modal } from "rsuite"
import OrderComponent from "./OrderComponent"

function CreateOrderModal(props) {
  const { show, formType, onHide, rowData, listCustomers, listProducts } = props

  const listNameCus = []
  listCustomers.forEach((item) => {
    return listNameCus.push({ value: item.id, label: item.firstName })
  })

  const listNameProducts = []
  listProducts.forEach((item) => {
    return listNameProducts.push({ value: item.id, label: item.title })
  })

  const handleSubmit = (values) => {}

  return (
    <>
      <div className="modal-container">
        <Modal show={show} size="lg" onHide={onHide}>
          <Modal.Header>
            <Modal.Title>
              {formType === "add" ? "Thêm mới đơn hàng" : "Chỉnh sửa đơn hàng"}
            </Modal.Title>
          </Modal.Header>
          {/* Body */}
          <Modal.Body>
            <Form
              onSubmit={handleSubmit}
              initialValues={formType === "add" ? {} : rowData}
              render={({ handleSubmit, values, submitting, pristine }) => (
                <RSform onSubmit={handleSubmit}>
                  <OrderComponent
                    listNameCus={listNameCus}
                    listNameProducts={listNameProducts}
                    listCustomers={listCustomers}
                    listProducts={listProducts}
                  />
                  <Button
                    type="submit"
                    color="blue"
                    style={{ marginTop: 20 }}
                    disabled={submitting || pristine}
                  >
                    Lưu
                  </Button>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </RSform>
              )}
            />
          </Modal.Body>
          {/* End Body */}
        </Modal>
      </div>
    </>
  )
}

export default CreateOrderModal
