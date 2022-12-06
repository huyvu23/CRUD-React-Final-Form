import axios from "axios"
import React from "react"
import { Field, Form } from "react-final-form"
import { useNavigate } from "react-router-dom"
import { Button, Col, Input, Notification, Row } from "rsuite"
import styles from "./CreateProduct.module.scss"

const baseUrl = "http://localhost:8011/api/v1/departments"

function CreateProduct() {
  //* useHistory replace equal useNavigate
  const navigate = useNavigate()
  const onSubmit = (values) => {
    axios({
      method: "POST",
      url: `${baseUrl}/create`,
      data: JSON.stringify(values),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((response) => {
        if (response.status === 201) {
          Notification.success({
            title: "Thêm thành công",
          })
          navigate("/listProducts")
        }
      })
      .catch((error) => {
        Notification.error({
          title: "Thêm lỗi",
        })
      })
  }

  const required = (value) => (value ? undefined : "Bạn phải diền thông tin này")

  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Thêm mới phòng ban</h1>
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
                        <Field name="name" validate={required}>
                          {({ input, meta }) => (
                            <>
                              <Input
                                {...input}
                                className={styles.widthInput}
                                type="text"
                                placeholder="Tên phòng ban"
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
                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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
