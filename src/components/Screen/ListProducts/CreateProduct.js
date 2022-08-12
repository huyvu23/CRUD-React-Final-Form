import React from "react"
import axios from "axios"
import styles from "./CreateProduct.module.scss"
import dataTypePlatForm from "../../DataSelect/DataPlatForm"
import dataAgency from "../../DataSelect/DataAgency"
import { useNavigate } from "react-router-dom"
import { Form, Field } from "react-final-form"
import { Button, Row, Col, Input, InputPicker } from "rsuite"

function CreateProduct() {
  //* useHistory replace equal useNavigate
  const navigate = useNavigate()
  const onSubmit = (values) => {
    const Obj = {
      platform: values.PlatForm,
      serial_number: values.Serial,
      manufacturer: values.Agency,
      model: values.Product,
      version: values.Version,
    }
    axios.post("https://62e38befb54fc209b88b1670.mockapi.io/api/products", { Obj })
  }

  const required = (value) => (value ? undefined : "Bạn phải diền thông tin này")
  const mustBeNumber = (value) => (isNaN(value) ? "Bản phải điền số" : undefined)
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined)

  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Thêm mới sản phẩm</h1>
          <div className={styles.formContainer}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, values, submitting, pristine }) => (
                //* handleSubmit will call event.preventDefault()
                <form onSubmit={handleSubmit}>
                  <Row className={styles.buttonContainer}>
                    <Button
                      className={styles.buttonSave}
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Lưu lại
                    </Button>
                    <Button onClick={() => navigate("/listProducts")}>Quay lại</Button>
                  </Row>
                  <Row>
                    <Row className={styles.containerInput}>
                      <Col lg={12}>
                        <Field name="Product" validate={required}>
                          {({ input, meta }) => (
                            <>
                              <Input
                                {...input}
                                className={styles.widthInput}
                                type="text"
                                placeholder="Sản phẩm"
                              />
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </>
                          )}
                        </Field>
                      </Col>
                      <Col lg={12}>
                        <Field name="Serial" validate={composeValidators(required)}>
                          {({ input, meta }) => (
                            <>
                              <Input
                                className={styles.widthInput}
                                {...input}
                                type="text"
                                placeholder="Số Serial"
                              />
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </>
                          )}
                        </Field>
                      </Col>
                    </Row>
                    <Row className={styles.containerInput}>
                      <Col lg={12}>
                        <Field name="Agency">
                          {({ input, meta }) => (
                            <>
                              <InputPicker
                                {...input}
                                data={dataAgency}
                                placeholder="Hãng"
                                className={styles.widthInput}
                              />

                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </>
                          )}
                        </Field>
                      </Col>
                      <Col lg={12}>
                        <Field name="PlatForm">
                          {({ input, meta }) => (
                            <>
                              <InputPicker
                                {...input}
                                data={dataTypePlatForm}
                                placeholder="Nền tảng"
                                className={styles.widthInput}
                              />

                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </>
                          )}
                        </Field>
                      </Col>
                    </Row>
                    <Row className={styles.containerInput}>
                      <Col lg={12}>
                        <Field name="Version" validate={composeValidators(required, mustBeNumber)}>
                          {({ input, meta }) => (
                            <>
                              <Input
                                {...input}
                                className={styles.widthInput}
                                type="text"
                                placeholder="Phiên bản"
                              />
                              {meta.error && meta.touched && (
                                <span className={styles.colorWarning}>{meta.error}</span>
                              )}
                            </>
                          )}
                        </Field>
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
    </>
  )
}

export default CreateProduct
