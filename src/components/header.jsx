import React from "react";
import { Link } from "react-router-dom";
import '../style/header.css'

import logoImg from '../assets/image/brandLogo/ayatLogo.png'

function Header() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <ul>
            <Link className="link" to="/home" >Bosh sahifa</Link>
            <Link className="link" to="/save" >Saqlanganlar</Link>
            <Link className="link" to="/about" >Qur'on haqida</Link>
            <Link className="link" to="/more" >Ko'proq</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
