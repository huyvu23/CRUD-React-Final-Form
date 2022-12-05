import PropTypes from "prop-types"
import React from "react"
import { Form } from "react-final-form"
import { Button, Form as RSform, Modal, Notification } from "rsuite"
import OrderComponent from "./OrderComponent"

function CreateOrderModal(props) {
  const {
    show,
    formType,
    onHide,
    rowData,
    listCustomers,
    listProducts,
    listNameProducts,
    listNameCus,
    setFakeData,
  } = props

  const handleSubmit = (values) => {
    if (formType === "add") {
      let listOrder = JSON.parse(localStorage.getItem("listOrder"))
      listOrder.push(values)
      localStorage.setItem("listOrder", JSON.stringify(listOrder))
      setFakeData(listOrder)
      onHide()
      Notification.success({
        title: "Thêm dữ liệu thành công",
      })
    } else {
      let listOrder = JSON.parse(localStorage.getItem("listOrder"))

      // listOrder[index] = { values }
      // setFakeData(listOrder)
      // localStorage.setItem("listOrder", JSON.stringify(listOrder))
      // onHide()
      // Notification.success({
      //   title: "Chỉnh sửa dữ liệu thành công",
      // })
    }
  }

  return (
    <>
      <div className="modal-container">
        <Modal show={show} size="lg" onHide={onHide}>
          {/* Header */}
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
CreateOrderModal.propTypes = {
  show: PropTypes.bool,
  formType: PropTypes.string,
  onHide: PropTypes.func,
  listCustomers: PropTypes.object,
  listProducts: PropTypes.object,
  setFakeData: PropTypes.func,
}
export default CreateOrderModal
