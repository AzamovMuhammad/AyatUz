import React from "react";
import { NavLink } from "react-router-dom";
import '../style/header.css';
import languages from "../language/language";
import logoImg from '../assets/image/brandLogo/ayatLogo.png';

function Sidebar({ isOpen, onClose }) {
  const savedLang = localStorage.getItem("selectedLanguage");
  const currentLang = languages.find((lang) => lang.code === savedLang);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <nav className="nav-links">
        <NavLink to="/user/home" className={({isActive}) => isActive ? "link active" : "link"} onClick={onClose}>
          {currentLang?.header.btn1}
        </NavLink>
        <NavLink to="/user/save" className={({isActive}) => isActive ? "link active" : "link"} onClick={onClose}>
          {currentLang?.header.btn2}
        </NavLink>
        <NavLink to="/user/about" className={({isActive}) => isActive ? "link active" : "link"} onClick={onClose}>
          {currentLang?.header.btn3}
        </NavLink>
        <NavLink to="/user/more" className={({isActive}) => isActive ? "link active" : "link"} onClick={onClose}>
          {currentLang?.header.btn4}
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
