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
import posthog from 'posthog-js'

const Random = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase();
    const isJapanese = browserLanguage.startsWith('ja');
    const randomPath = Math.random() < 0.5 ? '/us' : '/jp';

    if (isJapanese) {
      if (randomPath === '/us') {
        posthog.capture('en_jp_home', {"result" : "the user reached the japanese translation for the english website"})
        navigate('/ustranslated');
      } else {
        posthog.capture('jp_home', {"result" : "the user reached the japanese website"})
        navigate(randomPath);
      }
    } else {
      if (randomPath === '/jp') {
        posthog.capture('jp_en_home', {"result" : "the user reached the english translation for the japanese website"})
        navigate('/jptranslated');
      } else {
        posthog.capture('en_home', {"result" : "the user reached the english website"})
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

  posthog.init('phc_iBF0PfaKlfplDqP63pRgv1Or8eOxB6GmydTuYXq8HMb',
      {
          api_host: 'https://us.i.posthog.com',
          person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
      }
  )


  //posthog.capture('test_event', { property: 'from_my_website' })

  return (
      <Container>
       
        <Routes>
          <Route path="/us" element={<Home />} exact />
          <Route path="/ustranslated" element={< JapaneseTranslation/>} exact />
          <Route path="/survey" element={<Survey />} />
          <Route path="/jp" element={<JpHome />} />
          <Route path="/jptranslated" element={<EnHome />} />

          <Route path="/jpabout" element={<JpAbout />} />
          <Route path="/jpabouttranslated" element={<EnAbout />} />

          <Route path="/export" element={<Export />} />

          <Route path="/" element={<Random />} />

        </Routes>

      </Container>
  );
};

export default App;
