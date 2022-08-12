import React from "react"
import styles from "./UpdateProduct.module.scss"
import { useNavigate } from "react-router-dom"
import { Form, Field } from "react-final-form"
import { Button, Row, Col, Input } from "rsuite"
function UpdateProduct() {
  const navigate = useNavigate()

  const onSubmit = () => {
    debugger
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
          <h1>Cập nhật sản phẩm </h1>
          <div className={styles.formContainer}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, values, submitting, pristine }) => (
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
                  <Row className={styles.containerInput}>
                    <Col lg={12}>
                      <Field name="nameProductUpdate" validate={required}>
                        {({ input, meta }) => (
                          <>
                            <Input
                              {...input}
                              className={styles.widthInput}
                              type="text"
                              placeholder="Cập nhật tên sản phẩm "
                            />
                          </>
                        )}
                      </Field>
                    </Col>
                    <Col lg={12}>
                      <Field name="Serial">
                        {({ input, meta }) => (
                          <>
                            <Input
                              className={styles.widthInput}
                              {...input}
                              type="text"
                              placeholder="Cập nhật số Serial"
                            />
                            {meta.error && meta.touched && (
                              <span className={styles.colorWarning}>{meta.error}</span>
                            )}
                          </>
                        )}
                      </Field>
                    </Col>
                  </Row>
                </form>
              )}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default UpdateProduct
