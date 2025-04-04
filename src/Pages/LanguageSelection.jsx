import React, { useState, useEffect } from "react";
import "../style/LanguageSelection.css";
import Next from "./Next";

const languages = [
  { code: "uz", name: "Uz", flag: "🇺🇿" },
  { code: "ru", name: "Py", flag: "🇷🇺" },
  { code: "en", name: "En", flag: "🇬🇧" },
  { code: "tr", name: "Tr", flag: "🇹🇷" },
  { code: "kaa", name: "Qr", flag: "🇰р" },
];

const LanguageSelection = () => {
  const [selectedLang, setSelectedLang] = useState("uz"); // Default Uzbek

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
    <Next/>
    }
  }, []);

  const handleLanguageSelect = (code) => {
    setSelectedLang(code);
  };

  const handleContinue = () => {
    localStorage.setItem("selectedLanguage", selectedLang);
    return <Next/>
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
            <span className="flag">{lang.flag}</span> {lang.name}
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
