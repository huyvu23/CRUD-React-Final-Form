import Nav from "./components/Nav";
import Side from "./components/Side";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";

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
            <Content>Content</Content>
          </Container>
          {/* <Footer>Footer</Footer> */}
        </Container>
      </div>
    </div>
  );
}

export default App;
