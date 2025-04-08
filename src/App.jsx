import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EntrancePart from "./Pages/entrance";
import LanguageSelection from "./Pages/LanguageSelection";
import Header from "./components/header";
import Home from "./Pages/home";
import More from "./Pages/More";
import Save from "./Pages/Save";
import About from "./Pages/About";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <BrowserRouter>
    {!loadingComplete ? null : <Header />}
      <Routes>
        <Route path="/" element={!loadingComplete ? <EntrancePart onComplete={() => setLoadingComplete(true)} /> : <Navigate to="/language" />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/more" element={<More />} />
        <Route path="/save" element={<Save />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
