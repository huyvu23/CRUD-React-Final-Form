import "./App.css"
import "rsuite/dist/styles/rsuite-default.css"
import Nav from "./components/HomeScreen/Nav"
import Side from "./components/HomeScreen/Side"
import Home from "./components/HomeScreen/Home"
import ListProducts from "./components/ListProducts/ListProducts"
import ListCustomers from "./components/ListCustomers/ListCustomers"
import { Routes, Route } from "react-router-dom"
import { Container, Header, Content, Sidebar } from "rsuite"

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
        </Container>
      </div>
    </div>
  )
}

export default App
