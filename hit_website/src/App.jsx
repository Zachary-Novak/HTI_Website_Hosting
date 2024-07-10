import { Container, NavItem } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

// pages
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import JapaneseTranslation from "./pages/JapaneseTranslation";

import JpHome from "./japanese/pages/JpHome";
import JpAbout from "./japanese/pages/JpAbout";
import EnHome from "./japanese/pages/EnHome.jsx";
import EnAbout from "./japanese/pages/EnAbout";

import Export from "./pages/Export";

const Random = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase();
    const isJapanese = browserLanguage.startsWith('ja');
    const randomPath = Math.random() < 0.5 ? '/' : '/jp';

    if (isJapanese) {
      if (randomPath === '/') {
        navigate('/translated');
      } else {
        navigate(randomPath);
      }
    } else {
      if (randomPath === '/jp') {
        navigate('/jptranslated');
      } else {
        navigate(randomPath);
      }
    }
  }, []);

  return null;
};

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
          <Route path="/translated" element={< JapaneseTranslation/>} exact />
          <Route path="/survey" element={<Survey />} />
          <Route path="/jp" element={<JpHome />} />
          <Route path="/jptranslated" element={<EnHome />} />

          <Route path="/jpabout" element={<JpAbout />} />
          <Route path="/jpabouttranslated" element={<EnAbout />} />

          <Route path="/export" element={<Export />} />

          <Route path="/random" element={<Random />} />

        </Routes>

      </Container>
  );
};

export default App;
