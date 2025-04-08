import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EntrancePart from "./Pages/entrance";
import LanguageSelection from "./Pages/LanguageSelection";
import Next from "./Pages/Next";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!loadingComplete ? <EntrancePart onComplete={() => setLoadingComplete(true)} /> : <Navigate to="/language" />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/home" element={<Next />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
