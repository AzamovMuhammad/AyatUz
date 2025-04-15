import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../style/header.css'

import languages from "../language/language";

import logoImg from '../assets/image/brandLogo/ayatLogo.png'

function Sidebar() {
  const savedLang = localStorage.getItem("selectedLanguage");

  const currentLang = languages.find((lang) => lang.code === savedLang);
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <ul>
            <NavLink className="link" to="/user/home" >{currentLang?.header.btn1}</NavLink>
            <NavLink className="link" to="/user/save" >{currentLang?.header.btn2}</NavLink>
            <NavLink className="link" to="/user/about" >{currentLang?.header.btn3}</NavLink>
            <NavLink className="link" to="/user/more" >{currentLang?.header.btn4}</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
