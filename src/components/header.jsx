import React from "react";
import { Link } from "react-router-dom";
import '../style/header.css'

function Header() {
  return (
    <div>
      <nav>
        <div className="logo">
          Ayat<sup>Quiz</sup>
        </div>
        <ul>
            <Link className="link" >Bosh sahifa</Link>
            <Link className="link" >Saqlanganlar</Link>
            <Link className="link" >Qur'on haqida</Link>
            <Link className="link" >Ko'proq</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
