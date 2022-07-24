import Nav from "./components/HomeScreen/Nav"
import Side from "./components/HomeScreen/Side"
import Home from "./components/HomeScreen/Home"
import ListCustomers from "./components/ListCustomers/ListCustomers"
import ListProducts from "./components/ListProducts/ListProducts"
import { Container, Header, Content, Sidebar } from "rsuite"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
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
              </Routes>
            </Content>
          </Container>
          {/* <Footer>Footer</Footer> */}
        </Container>
      </div>
    </div>
  )
}

export default App
