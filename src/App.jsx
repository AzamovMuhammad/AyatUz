import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import EntrancePart from "./Pages/Entrance";
import LanguageSelection from "./Pages/LanguageSelection";
import Home from "./Pages/home";
import More from "./Pages/More";
import Save from "./Pages/Save";
import About from "./Pages/About";
import NotFoundPage from "./Pages/notFoundPage";
import UserLayout from "./components/UserLayout";
import TestType from "./Pages/TestType";
import Stage from "./Pages/Stage";
import EntryTest from "./Pages/entryTest";
import Questions from "./Pages/Questions";
import FinalResult from "./Pages/finalResult";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(false);

  useEffect(() => {
    const selectedLang = localStorage.getItem("selectedLanguage");
    if (selectedLang) {
      setLanguageSelected(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppContent
        loadingComplete={loadingComplete}
        setLoadingComplete={setLoadingComplete}
        languageSelected={languageSelected}
      />
    </BrowserRouter>
  );
}

function AppContent({ loadingComplete, setLoadingComplete, languageSelected }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          !loadingComplete ? (
            <EntrancePart onComplete={() => setLoadingComplete(true)} />
          ) : (
            <Navigate to={languageSelected ? "/user/home" : "/language"} />
          )
        }
      />
      <Route path="/language" element={<LanguageSelection />} />
      <Route path="/user" element={<UserLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="more" element={<More />} />
        <Route path="save" element={<Save />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<TestType />} />
        <Route path="stage" element={<Stage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/entry" element={<EntryTest />} />
      <Route path="/question" element={<Questions />} />
      <Route path="/result" element={<FinalResult />} />
    </Routes>
  );
}

export default App;
