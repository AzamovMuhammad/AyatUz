import React, { useEffect } from "react";
import { FaArrowRight, FaPaperPlane, FaStar, FaComment } from "react-icons/fa";
import languages from "../language/language";
import "../style/more.css";
import { useNavigate } from "react-router-dom";

function More() {

  const navigate = useNavigate();
  useEffect(() => {
    const isEntered = localStorage.getItem("selectedLanguage");
    if (!isEntered) {
      navigate("/");
    }
  }, []);

  const savedLang = localStorage.getItem("selectedLanguage")
  const currentLang = languages.find((lang) => lang.code === savedLang)

  const menuItems = [
    { text: `${currentLang?.morePart.btn1}`, icon: <FaArrowRight /> },
    { text: `${currentLang?.morePart.btn2}`, icon: <FaPaperPlane /> },
    { text: `${currentLang?.morePart.btn3}`, icon: <FaStar /> },
    { text: `${currentLang?.morePart.btn4}`, icon: <FaComment /> },
  ];

  return (
    <div className="morePart">
      <div className="settings-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default More;
