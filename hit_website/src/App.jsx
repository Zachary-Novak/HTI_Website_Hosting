import { Container } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

// pages
import Home from "./pages/Home";
import Survey from "./pages/Survey";

import JpHome from "./japanese/pages/JpHome";
import JpAbout from "./japanese/pages/JpAbout";

const Random = () => {
  const navigate = useNavigate();

  useEffect(() => {
      navigate(Math.random() < 0.5 ? '/' : '/jp')
  }, []);

  return null
}

const App = () => {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/survey" element={<Survey />} />
          <Route path="/jp" element={<JpHome />} />
          <Route path="/jpabout" element={<JpAbout />} />

          <Route path="/random" element={<Random />} />

        </Routes>

      </Container>
  );
};

export default App;
