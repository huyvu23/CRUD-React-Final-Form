import axios from "axios"
import React, { useEffect, useState } from "react"
import { Field, Form } from "react-final-form"
import { Button, Col, Form as RSform, Modal, Row } from "rsuite"
import { EmailValid, Required } from "../../../utils/Validate"
import { InputField, InputPickerField } from "../../CustomField"
const baseURL = "http://localhost:8081/api/v1"
function ModalCreateAndUpdate(props) {
  const { show, onHide, formType, rowData } = props

  const [listPosition, setListPosition] = useState([])
  const [listDepartment, setListDepartment] = useState([])

  const getListDepartment = () => {
    axios.get(`${baseURL}/departments`).then((res) => {
      console.log(res)
      setListDepartment(res.data)
    })
  }

  const getListPositions = () => {
    axios.get(`${baseURL}/positions`).then((res) => {
      console.log(res)
      setListPosition(res.data)
    })
  }

  useEffect(() => {
    getListDepartment()
    getListPositions()
  }, [])

  const handleSubmit = (values) => {
    axios({
      method: "POST",
      url: `${baseURL}/accounts/create`,
      data: JSON.stringify(values),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((response) => {
        if (response.status === 201) {
          Notification.success({
            title: "Thêm thành công",
          })
          onHide()
        }
      })
      .catch((error) => {
        Notification.error({
          title: "Thêm lỗi",
        })
      })
  }
  return (
    <>
      <div className="modal-container">
        <Modal size="lg" show={show} onHide={onHide}>
          {/* Header */}
          <Modal.Header>
            <Modal.Title>Thêm mới Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={handleSubmit}
              initialValues={formType === "update" ? rowData : {}}
              render={({ handleSubmit, values, submitting, pristine }) => (
                <RSform onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={10}>
                      <Field
                        label="Email"
                        name="email"
                        placeholder="Email"
                        validate={EmailValid}
                        component={InputField}
                      />
                    </Col>
                    <Col lg={10}>
                      <Field
                        label="UserName"
                        name="username"
                        placeholder="UserName"
                        validate={Required}
                        component={InputField}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col lg={10}>
                      <Field
                        label="FullName"
                        name="fullname"
                        placeholder="FullName"
                        component={InputField}
                        validate={Required}
                      />
                    </Col>
                    <Col lg={10}>
                      <Field
                        label="Department"
                        valueKey="id"
                        labelKey="name"
                        name="department"
                        placeholder="Chọn"
                        component={InputPickerField}
                        inputvalue={listDepartment || []}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col lg={10}>
                      <Field
                        label="Position"
                        valueKey="id"
                        labelKey="name"
                        name="position"
                        placeholder="Chọn"
                        inputvalue={listPosition || []}
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
                    Lưu
                  </Button>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </RSform>
              )}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ModalCreateAndUpdate
