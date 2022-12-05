import React from "react"
import { Field, useForm } from "react-final-form"
import { Col, Row } from "rsuite"
import {
  InputField,
  InputPickerField,
  NumberFormatField,
} from "../../../components/CustomField/index"
import { PhoneValid, Required } from "../../../utils/Validate"
function OrderComponent(props) {
  const { listNameProducts, listNameCus, listCustomers, listProducts } = props
  console.log(listNameCus)
  //   Hooks
  const form = useForm()
  const { change, getFieldState } = form

  //*   ================================ Form change function ===============================
  const handleChangeCustomer = (value) => {
    const customer = listCustomers.find((item) => item.firstName === value) ?? null
    change("numberPhone", customer.phone)
    change("address", customer.address.city)
  }

  const handleChangeProduct = (value) => {
    const product = listProducts.find((item) => item.title === value) ?? null
    const amount = parseInt(getFieldState("amount")?.value)
    change("price", product.price)
    change("money", product.price * amount)
  }

  return (
    <>
      <Row>
        <Col lg={10}>
          <Field
            label="Mã đơn hàng"
            name="id"
            placeholder="Mã đơn hàng"
            validate={Required}
            component={InputField}
          />
        </Col>
        <Col lg={10}>
          <Field
            label="Tên khách hàng"
            name="nameCustomer"
            placeholder="Tên khách hàng"
            inputvalue={listNameCus}
            validate={Required}
            component={InputPickerField}
            onSelect={(value) => handleChangeCustomer(value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col lg={10}>
          <Field
            label="Số điện thoại"
            name="numberPhone"
            placeholder="Tự động"
            readOnly
            component={InputField}
            validate={PhoneValid}
          />
        </Col>
        <Col lg={10}>
          <Field
            label="Địa chỉ"
            name="address"
            readOnly
            placeholder="Tự động"
            component={InputField}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col lg={10}>
          <Field
            label="Tên sản phẩm"
            name="nameProduct"
            placeholder="Chọn"
            inputvalue={listNameProducts}
            component={InputPickerField}
            onSelect={(value) => handleChangeProduct(value)}
          />
        </Col>
        <Col lg={10}>
          <Field label="Số lượng" name="amount" placeholder="Số lượng" component={InputField} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col lg={10}>
          <Field
            label="Đơn giá"
            name="price"
            placeholder="Tự động"
            component={NumberFormatField}
            readOnly
          />
        </Col>
        <Col lg={10}>
          <Field
            label="Thành tiền"
            name="money"
            placeholder="Tự động"
            readOnly
            thousandSeparator={true}
            component={NumberFormatField}
          />
        </Col>
      </Row>
    </>
  )
}

export default OrderComponent
