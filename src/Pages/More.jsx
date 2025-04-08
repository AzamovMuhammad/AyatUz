import React from 'react'
import { FaArrowRight, FaPaperPlane, FaStar, FaComment } from "react-icons/fa";

import "../style/more.css"


function More() {
    const menuItems = [
        { text: "Til", icon: <FaArrowRight /> },
        { text: "Ilovani do‘stlarga ulashing", icon: <FaPaperPlane /> },
        { text: "Ilovani baholang", icon: <FaStar /> },
        { text: "Dasturchilar bilan bog‘lanish", icon: <FaComment /> },
      ];
    
      return (
        <div className="settings-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <span className="menu-text">{item.text}</span>
              <span className="menu-icon">{item.icon}</span>
            </div>
          ))}
        </div>
      );
}

export default More