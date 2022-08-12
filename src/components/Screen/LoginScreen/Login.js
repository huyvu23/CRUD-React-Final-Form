import React from "react"
import { Field, Form } from "react-final-form"
import { Button, Form as RSform, Grid, Row } from "rsuite"
import styles from "./Login.module.scss"
import { setUserLogin } from "../../../Features/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    const { username, password } = values
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          dispatch(
            setUserLogin({
              name: result.firstName,
              token: result.token,
              photo: result.image,
            })
          )
        }
        navigate("/")
      })
  }
  return (
    <>
      <div className={styles.loginContainer}>
        <h4>Đăng nhập</h4>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, submitting, values, form }) => {
            return (
              <RSform onSubmit={handleSubmit} layout="vertical">
                <Grid fluid>
                  <Row>
                    <div>
                      <label>UserName</label>
                      <Field
                        component="input"
                        placeholder="Nhập tên đăng nhập"
                        labelclassname="text-white"
                        name="username"
                        defaultstyle
                      />
                    </div>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <div>
                      <label>Password</label>
                      <Field
                        component="input"
                        defaultstyle
                        type="password"
                        placeholder="Nhập mật khẩu"
                        labelclassname="text-white"
                        name="password"
                      />
                    </div>
                  </Row>
                </Grid>
                <Button type="submit" style={{ marginTop: 20 }} appearance="primary">
                  Đăng nhập
                </Button>
              </RSform>
            )
          }}
        />
      </div>
    </>
  )
}

export default Login
