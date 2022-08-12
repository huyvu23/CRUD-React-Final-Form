import React from "react"
import styles from "./FilterProduct.module.scss"
import dataTypePlatForm from "../../DataSelect/DataPlatForm"
import dataAgency from "../../DataSelect/DataAgency"
import { Form, Field } from "react-final-form"
import { Row, Col, InputPicker, Input, Button } from "rsuite"
function FilterProducts() {
  const onSubmit = (values) => console.log(values)

  return (
    <>
      <section className={styles.container}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
              <Row>
                <Row>
                  <Col lg={12}>
                    <Field name="NameProduct">
                      {({ input, meta }) => (
                        <>
                          <Input {...input} type="text" placeholder="Tên hãng" />
                        </>
                      )}
                    </Field>
                  </Col>
                  <Col lg={12}>
                    <Field name="Version">
                      {({ input, meta }) => (
                        <>
                          <Input {...input} type="text" placeholder="Phiên bản" />
                        </>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row>
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
                        </>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row className={styles.buttonContainer}>
                  <Button
                    className={styles.buttonFilter}
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Lọc
                  </Button>
                </Row>
              </Row>
            </form>
          )}
        />
      </section>
    </>
  )
}

export default FilterProducts
