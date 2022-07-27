import "./App.css"
import "rsuite/dist/styles/rsuite-default.css"
import Nav from "./components/Screen/HomeScreen/Nav"
import Side from "./components/Screen/HomeScreen/Side"
import Home from "./components/Screen/HomeScreen/Home"
import GlobalStyles from "./components/GlobalStyles"
import ListProducts from "./components/Screen/ListProducts/ListProducts"
import ListCustomers from "./components//Screen/ListCustomers/ListCustomers"
import CreateProduct from "./components/Screen/ListProducts/CreateProduct"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container, Header, Content, Sidebar } from "rsuite"

function App() {
  return (
    <Router>
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
                    <Route path="/listProducts" element={<ListProducts />} />
                    <Route path="/listCustomers" element={<ListCustomers />} />
                    <Route path="/createProduct" element={<CreateProduct />} />
                  </Routes>
                </Content>
              </Container>
            </Container>
          </div>
        </div>
      </GlobalStyles>
    </Router>
  )
}

export default App
