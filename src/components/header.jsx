import React from "react";
import { Link } from "react-router-dom";
import '../style/header.css'

import languages from "../language/language";

import logoImg from '../assets/image/brandLogo/ayatLogo.png'

function Header() {
  const savedLang = localStorage.getItem("selectedLanguage");

  const currentLang = languages.find((lang) => lang.code === savedLang);
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <ul>
            <Link className="link" to="/home" >{currentLang?.header.btn1}</Link>
            <Link className="link" to="/save" >{currentLang?.header.btn2}</Link>
            <Link className="link" to="/about" >{currentLang?.header.btn3}</Link>
            <Link className="link" to="/more" >{currentLang?.header.btn4}</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
