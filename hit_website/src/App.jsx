import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Survey from "./pages/Survey";

import JpHome from "./japanese/pages/JpHome";
import JpAbout from "./japanese/pages/JpAbout";



const App = () => {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/survey" element={<Survey />} />
          <Route path="/jp" element={<JpHome />} />
          <Route path="/jpabout" element={<JpAbout />} />

        </Routes>

      </Container>
  );
};

export default App;
