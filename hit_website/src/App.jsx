import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Survey from "./pages/Survey";

const App = () => {
  return (
    <Layout>
      <Container>

      <Home/>
      {/* <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/survey" element={<Survey />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container> */}
      </Container>
    </Layout>
  );
};

export default App;
