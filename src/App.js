import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Container, Content, Header, Sidebar } from "rsuite"
import "rsuite/dist/styles/rsuite-default.css"
import "./App.css"
import ListCustomers from "./components//Screen/ListCustomers/ListCustomers"
import GlobalStyles from "./components/GlobalStyles"
import Home from "./components/Screen/HomeScreen/Home"
import Nav from "./components/Screen/HomeScreen/Nav"
import Side from "./components/Screen/HomeScreen/Side"
import ListOrder from "./components/Screen/ListOrder/ListOrder"
import CreateProduct from "./components/Screen/ListProducts/CreateProduct"
import ListProducts from "./components/Screen/ListProducts/ListProducts"
import UpdateProduct from "./components/Screen/ListProducts/UpdateProduct"
import Login from "./components/Screen/LoginScreen/Login"
import { selectUserToken } from "./Features/userSlice"

function App() {
  const userToken = useSelector(selectUserToken)

  return (
    <Router>
      {!userToken ? (
        <Login />
      ) : (
        <GlobalStyles>
          <div className="App">
            <div className="show-container">
              <Container>
                <Header>
                  <Nav />
                </Header>
                <Container>
                  <Sidebar>
                    <Side />
                  </Sidebar>
                  <Content>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/listProducts" element={<ListProducts />} />
                      <Route path="/listCustomers" element={<ListCustomers />} />
                      <Route path="/createProduct" element={<CreateProduct />} />
                      <Route path="/updateProduct/:id" element={<UpdateProduct />} />
                      <Route path="/listOrder" element={<ListOrder />} />
                    </Routes>
                  </Content>
                </Container>
              </Container>
            </div>
          </div>
        </GlobalStyles>
      )}
    </Router>
  )
}

export default App
