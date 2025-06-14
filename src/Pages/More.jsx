import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPaperPlane, FaStar, FaComment } from "react-icons/fa";
import languages from "../language/language";
import "../style/more.css";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../components/Notification/NotificationContext";

function More() {
  const navigate = useNavigate();
  const savedLang = localStorage.getItem("selectedLanguage");
  const currentLang = languages.find((lang) => lang.code === savedLang);

  const shareModal = useRef(null);

  const [copied, setCopied] = useState(false);
  const link = "https://ayatquiz.com/";
  const { showNotification } = useNotification();

  useEffect(() => {
    const isEntered = localStorage.getItem("selectedLanguage");
    if (!isEntered) {
      navigate("/");
    }
  }, []);
  const handleClickNoti = () => {
    showNotification(
      "Kechirasiz, sahifa ishlab chiqilmoqda. Tez kunda ishga tushadi.",
      "info"
    );
  };

  const handleShareNoti = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      showNotification("Copied", "info");

      closeShareModal();
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const handleSelectLang = () => {
    localStorage.removeItem("selectedLanguage");
    navigate("/language");
  };

  const openShareModal = () => {
    shareModal.current.style.display = "flex";
  };

  const closeShareModal = () => {
    shareModal.current.style.display = "none";
  };

  const goToTelegram = () => {
    window.open('https://t.me/ayat_quiz_support_bot', '_blank')
  }

  const menuItems = [
    {
      text: `${currentLang?.morePart.btn1}`,
      icon: <FaArrowRight />,
      func: handleSelectLang,
    },
    {
      text: `${currentLang?.morePart.btn2}`,
      icon: <FaPaperPlane />,
      func: openShareModal,
    },
    {
      text: `${currentLang?.morePart.btn3}`,
      icon: <FaStar />,
      func: handleClickNoti,
    },
    {
      text: `${currentLang?.morePart.btn4}`,
      icon: <FaComment />,
      func: goToTelegram,
    },
  ];

  return (
    <div className="morePart">
      <div ref={shareModal} className="shareModal">
        <div className="inputGroup">
          <input type="text" value={link} readOnly />
          <button onClick={handleShareNoti}>📋</button>
        </div>
      </div>

      <div className="settings-menu">
        {menuItems.map((item, index) => (
          <div key={index} onClick={item.func} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default More;
