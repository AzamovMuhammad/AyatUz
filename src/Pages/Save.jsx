import React, { useEffect } from "react";
import "../style/save.css";
import { useNavigate } from "react-router-dom";

function Save() {
  const navigate = useNavigate();
  useEffect(() => {
    const isEntered = localStorage.getItem("selectedLanguage");
    if (!isEntered) {
      navigate("/");
    }
  }, []);
  
  return (
    <div className="save_page">
      <h1>Bu sahifa tez orada ishga tushadi inshaalloh.</h1>
    </div>
  );
}

export default Save;
