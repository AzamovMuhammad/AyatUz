import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import EntrancePart from "./Pages/Entrance";
import LanguageSelection from "./Pages/LanguageSelection";
import Header from "./components/Header";
import Home from "./Pages/home";
import More from "./Pages/More";
import Save from "./Pages/Save";
import About from "./Pages/About";
import NotFoundPage from "./Pages/notFoundPage";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(false);

  useEffect(() => {
    // LocalStorage yoki boshqa joydan til tanlanganligini tekshirish
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
  const location = useLocation();
  const noHeaderRoutes = ["/", "/language"]; // Bu sahifalarda header chiqmasin

  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route 
          path="/" 
          element={!loadingComplete 
            ? <EntrancePart onComplete={() => setLoadingComplete(true)} /> 
            : <Navigate to={languageSelected ? "/home" : "/language"} />} 
        />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/more" element={<More />} />
        <Route path="/save" element={<Save />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
