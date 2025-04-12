import React, { useState, useEffect } from "react";
import "../style/LanguageSelection.css";

import { useNavigate } from "react-router-dom";

// tilni import qilyapmiz
import languages from '../language/language'

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
 
  // tanlangan tilga mos tilni arraydan ushlab olish
  const currentLang = languages.find((lang) => lang.code === selectedLang)

  return (
    <div className="language-container">
      <h2>{currentLang?.langPart.h2}</h2>
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
      {currentLang?.langPart.button}
      </button>
    </div>
  );
};

export default LanguageSelection;
