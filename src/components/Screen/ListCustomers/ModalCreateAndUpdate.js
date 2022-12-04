import React from "react"
import { Field, Form } from "react-final-form"
import { Button, Col, Form as RSform, Modal, Row } from "rsuite"
import { EmailValid, Required } from "../../../utils/Validate"
import { InputField, InputPickerField } from "../../CustomField"
function ModalCreateAndUpdate(props) {
  const { show, onHide, formType, rowData } = props
  const handleSubmit = (values) => {}
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
                        name="department"
                        placeholder="Chọn"
                        component={InputPickerField}
                        // inputvalue={listNameCus}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col lg={10}>
                      <Field
                        label="Position"
                        name="position"
                        placeholder="Chọn"
                        // inputvalue={listNameProducts}
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
