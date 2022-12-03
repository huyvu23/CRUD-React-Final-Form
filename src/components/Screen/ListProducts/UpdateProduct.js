import axios from "axios"
import React, { useEffect, useState } from "react"
import { Field, Form } from "react-final-form"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Col, Form as RSForm, Notification, Row } from "rsuite"
import { Required } from "../../../utils/Validate"
import { InputField } from "../../CustomField"
import styles from "./UpdateProduct.module.scss"

const baseUrl = "http://localhost:8080/api/v1/departments"

function UpdateProduct() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(`${baseUrl}/${id}`).then((res) => {
      if (res.status === 200) {
        setData(res.data)
      } else {
        Notification.error({
          title: "Lấy dữ liệu lỗi",
        })
      }
    })
  }, [id])

  const onSubmit = (values) => {
    const { id } = values
    axios({
      method: "PUT",
      url: `${baseUrl}/update/${id}`,
      data: JSON.stringify(values),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((response) => {
        if (response.status === 201) {
          Notification.success({
            title: "Update thành công",
          })
          navigate("/listProducts")
        }
      })
      .catch((error) => {
        Notification.error({
          title: "Update lỗi",
        })
      })
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundTable}>
          <h1>Cập nhật phòng ban </h1>
          <div className={styles.formContainer}>
            <Form
              onSubmit={onSubmit}
              initialValues={data}
              render={({ handleSubmit, submitting, pristine }) => (
                <RSForm onSubmit={handleSubmit}>
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
                      <Field
                        name="name"
                        placeholder="Mã đơn hàng"
                        validate={Required}
                        component={InputField}
                      />
                    </Col>
                  </Row>
                </RSForm>
              )}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default UpdateProduct
