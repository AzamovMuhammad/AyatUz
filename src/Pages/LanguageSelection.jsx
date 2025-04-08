import React, { useState, useEffect } from "react";
import "../style/LanguageSelection.css";
import Next from "./Next";

import uzFlag from "../assets/image/flags/uz.png";
import ruFlag from "../assets/image/flags/ru.png";
import enFlag from "../assets/image/flags/en.png";
import trFlag from "../assets/image/flags/tr.png";
import kaaFlag from "../assets/image/flags/kaa.png";
import { useNavigate } from "react-router-dom";

const languages = [
  { code: "uz", name: "Uz", flag: uzFlag },
  { code: "ru", name: "Py", flag: ruFlag },
  { code: "en", name: "En", flag: enFlag },
  { code: "tr", name: "Tr", flag: trFlag },
  { code: "kaa", name: "Qr", flag: kaaFlag },
];

const LanguageSelection = () => {
  const [selectedLang, setSelectedLang] = useState("uz"); // Default Uzbek
  const navigate = useNavigate();

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      navigate('/home')
    }
  }, []);

  const handleLanguageSelect = (code) => {
    setSelectedLang(code);
  };

  const handleContinue = () => {
    localStorage.setItem("selectedLanguage", selectedLang);
    navigate("/home"); 
  };

  return (
    <div className="language-container">
      <h2>Tilni tanlash</h2>
      <div className="language-list">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className={`language-option ${selectedLang === lang.code ? "selected" : ""}`}
            onClick={() => handleLanguageSelect(lang.code)}
          >
            <img src={lang.flag} className="flag"/> {lang.name}
          </div>
        ))}
      </div>
      <button className="continue-btn" onClick={handleContinue}>
        Davom etish
      </button>
    </div>
  );
};

export default LanguageSelection;
