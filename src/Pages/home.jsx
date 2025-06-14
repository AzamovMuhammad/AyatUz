import React, { useEffect } from "react";

import languages from "../language/language";
import { FaCircleArrowRight } from "react-icons/fa6";
import "../style/homePage.css";
import homeImg from "/images/homeImg/man.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const savedLang = localStorage.getItem("selectedLanguage");
  const currentLang = languages.find((lang) => lang.code === savedLang);

    useEffect(() => {
      const isEntered = localStorage.getItem("selectedLanguage");
      if (!isEntered) {
        navigate("/");
      }
    }, []);


  return (
    <div className="homePage">
      <h1 className="home_title">{currentLang?.homePart.home_title}</h1>
      <div className="home_img">
        <img src={homeImg} alt="" />
      </div>
      <h2 className="home_text">{currentLang?.homePart.home_text}</h2>
      <button
        className="home_btn"
        onClick={() => {
          navigate(`/user/home/test`);
        }}>
        {currentLang?.homePart.home_btn} <FaCircleArrowRight />{" "}
      </button>
    </div>
  );
}

export default Home;
