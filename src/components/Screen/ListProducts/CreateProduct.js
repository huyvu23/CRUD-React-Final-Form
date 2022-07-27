import React from "react"
import { Button, Row, Col, DatePicker, Input, InputPicker } from "rsuite"
import { Link } from "react-router-dom"
import styles from "./CreateProduct.module.scss"
import { Form, Field } from "react-final-form"
function CreateProduct() {
  const onSubmit = () => {
    debugger
  }
  const required = (value) => (value ? undefined : "Bạn phải diền thông tin này")
  const mustBeNumber = (value) => (isNaN(value) ? "Bản phải điền số" : undefined)
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined)

  const dataStatus = [
    {
      label: "Còn hàng",
      value: "Còn hàng",
    },
    {
      label: "Hết hàng",
      value: "Hết hàng",
    },
  ]
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Thêm mới sản phẩm</h1>
          <div className={styles.formContainer}>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {}
                if (!values.Product) {
                  errors.Product = "Bạn chưa điền tên sản phẩm"
                }
                if (!values.Price) {
                  errors.Price = "Bạn chưa điền giá sản phẩm"
                }
                if (values.TypesProduct === "") {
                  errors.TypesProducts = "Bạn chưa chọn loại sản phẩm"
                }

                return errors
              }}
              render={({ handleSubmit, values, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles.buttonContainer}>
                    <Button
                      className={styles.buttonSave}
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Lưu lại
                    </Button>
                    <Link to="/listProducts">
                      <Button>Quay lại</Button>
                    </Link>
                  </div>
                  <Row>
                    <Row className={styles.containerInput}>
                      <Col lg={12}>
                        <Field name="Product">
                          {({ input, meta }) => (
                            <div>
                              <Input
                                className={styles.widthInput}
                                {...input}
                                type="text"
                                placeholder="Sản phẩm"
                              />
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </Col>
                      <Col lg={12}>
                        <Field name="Amount" validate={composeValidators(required, mustBeNumber)}>
                          {({ input, meta }) => (
                            <div>
                              <Input
                                className={styles.widthInput}
                                {...input}
                                type="text"
                                placeholder="Số lượng"
                              />
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </Col>
                    </Row>
                    <Row className={styles.containerInput}>
                      <Col lg={12}>
                        <Field name="TypesProduct">
                          {({ input, meta }) => (
                            <div>
                              <InputPicker placeholder="Loại SP" className={styles.widthInput} />;
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </Col>
                      <Col lg={12}>
                        <Field name="Status">
                          {({ input, meta }) => (
                            <div>
                              <InputPicker
                                data={dataStatus}
                                placeholder="Trạng thái"
                                className={styles.widthInput}
                              />
                              ;
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </Col>
                    </Row>
                    <Row className={styles.containerInput}>
                      <Col lg={12}>
                        <Field className={styles.widthInput} name="Date" component="input"></Field>
                      </Col>
                      <Col lg={12}>
                        <Field name="Price">
                          {({ input, meta }) => (
                            <div>
                              <Input
                                className={styles.widthInput}
                                {...input}
                                type="text"
                                placeholder="Giá bán"
                              />
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        {/* className={styles.widthInput}
                          name="Price"
                          component="input"
                          type="text"
                          placeholder="Giá bán" */}
                      </Col>
                    </Row>
                  </Row>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              )}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateProduct
