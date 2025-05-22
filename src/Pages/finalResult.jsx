import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/FinalResult.css";
import languages from "../language/language";

function FinalResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const type = location.state?.questType || null;
  const numOfQuestion = location.state?.numOfQuest || 0;
  const score = location.state?.score || 0;

  const forPass = Math.round(numOfQuestion * 0.8);
  const isPassed = score >= forPass;

  const firstId = localStorage.getItem("firstId");
  const nextId = localStorage.getItem("nextId");
  function backToStage() {  
    if (isPassed) {      
      const current = parseInt(localStorage.getItem("currentStageIndex"));
      if (firstId >= current) {
        localStorage.setItem("currentStageIndex", nextId);
      }
      navigate(`/user/home/stage?type=${type}`)
      localStorage.removeItem('firstId');
      localStorage.removeItem('nextId');
    }  else{
      navigate(`/user/home/stage?type=${type}`)
    }
  }


  const savedLang = localStorage.getItem("selectedLanguage");
  const currentLang = languages.find((lang) => lang.code === savedLang);

  useEffect(() => {
    const isEntered = savedLang;
    if (!isEntered) {
      navigate("/")
    }
  }, [])

  return (
    <div className="result-container">
      <div className={`result-card ${isPassed ? "success" : "fail"}`}>
        <h1>{isPassed ? currentLang?.finalResult.isPassedT : currentLang?.finalResult.isPassedF}</h1>
        <p>{isPassed ? currentLang?.finalResult.pass : currentLang?.finalResult.noPass}</p>
        <h2>
          {score}/<span>{numOfQuestion}</span>
        </h2>
        <p>
          {score === numOfQuestion
            ? `${currentLang?.finalResult.fullScore}`
            : `${score} ${currentLang?.finalResult.anyScore}`}
        </p>
        <button
          className="main-btn"
          onClick={() => backToStage()}>
          {isPassed ? currentLang?.finalResult.back : currentLang?.finalResult.repass}
        </button>
      </div>
    </div>
  );
}

export default FinalResult;
