import React from "react";
import "../style/testType.css";
import { useNavigate } from "react-router-dom";

import img from "../assets/image/testType/Quran_2.svg";
import { FaQuestion } from "react-icons/fa";
import languages from "../language/language";

function openModal() {
  const questionModal = document.querySelector(".questionModal");
  questionModal.style.display = "flex";
}
function closeModal() {
  const questionModal = document.querySelector(".questionModal");
  questionModal.style.display = "none";
}

function TestType() {
  const savedLang = localStorage.getItem("selectedLanguage");
  const currentLang = languages.find((lang) => lang.code === savedLang);
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="shadow" onClick={openModal}>
        <FaQuestion />
      </button>

      <div className="questionModal">
        <div className="middleDiv">
          <p className="bosqich">{currentLang?.testTypePart.p1}</p>
          <p className="butun">{currentLang?.testTypePart.p2}</p>
          <p className="juz">{currentLang?.testTypePart.p3}</p>
          <p className="sura">{currentLang?.testTypePart.p4}</p>
          <h3>{currentLang?.testTypePart.h3}</h3>
          <button onClick={closeModal}>
            {currentLang?.testTypePart.closeBtn}
          </button>
        </div>
      </div>
      <img src={img} alt="" />
      <h1 className="chooseH1">{currentLang?.testTypePart.h1}</h1>
      <div className="btns">
        <button
          onClick={() => {
            navigate(`/user/home/stage?type=quiz`);
          }}>
          {currentLang?.testTypePart.btn1}
        </button>
        <button
          onClick={() => {
            navigate(`/user/home/stage`);
          }}>
          {currentLang?.testTypePart.btn2}
        </button>
        <button
          onClick={() => {
            navigate(`/user/home/stage?type=juz`);
          }}>
          {currentLang?.testTypePart.btn3}
        </button>
        <button
          onClick={() => {
            navigate(`/user/home/stage`);
          }}>
          {currentLang?.testTypePart.btn4}
        </button>
      </div>
    </div>
  );
}

export default TestType;
