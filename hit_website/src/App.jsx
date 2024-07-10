import { Container, NavItem } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

// pages
import Home from "./pages/Home";
import Survey from "./pages/Survey";

import JpHome from "./japanese/pages/JpHome";
import JpAbout from "./japanese/pages/JpAbout";
import Export from "./pages/Export";

const Random = () => {
  const navigate = useNavigate();

  useEffect(() => {
      navigate(Math.random() < 0.5 ? '/' : '/jp')
  }, []);

  return null
}

const App = () => {
  console.log(navigator)

  /*

  Here is the code:

  ________________________________________
  
  let language_choice = "english"

  if (navigator.languages.includes("ja") || navigator.languages.includes("ja-JP")) {
    language_choice = "japanese"
  } 
  
  _________________________________________


  if language_choice equals english, then its supposed to be in english. If 
  it equals japanese, then its supposed to be in Japanese*/


  return (
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/survey" element={<Survey />} />
          <Route path="/jp" element={<JpHome />} />
          <Route path="/jpabout" element={<JpAbout />} />

          <Route path="/export" element={<Export />} />

          <Route path="/random" element={<Random />} />

        </Routes>

      </Container>
  );
};

export default App;
