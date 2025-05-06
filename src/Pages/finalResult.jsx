import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/FinalResult.css";

function FinalResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const type = location.state?.questType || null;
  const numOfQuestion = location.state?.numOfQuest || 0;
  const score = location.state?.score || 0;

  const forPass = Math.ceil(numOfQuestion * 0.6);
  const isPassed = score >= forPass;

  const current = parseInt(localStorage.getItem("currentStageIndex")) || 10001;
  localStorage.setItem("currentStageIndex", current + 1);

  return (
    <div className="result-container">
      <div className={`result-card ${isPassed ? "success" : "fail"}`}>
        <h1>{isPassed ? "Barakalloh!" : "Afsus"}</h1>
        <p>Siz 1-bosqichdan {isPassed ? "o‘tdingiz!" : "o‘tolmadingiz!"}</p>
        <h2>
          {score}/<span>{numOfQuestion}</span>
        </h2>
        <p>
          {score === numOfQuestion
            ? `Siz barcha savolga to'g'ri javob berdingiz`
            : `${score} ta savolga to‘g‘ri javob berdingiz`}
        </p>
        <button
          className="main-btn"
          onClick={() => navigate(`/user/home/stage?type=${type}`)}>
          {isPassed ? `Bosh sahifaga qaytish` : "Qayta topshirish"}
        </button>
      </div>
    </div>
  );
}

export default FinalResult;
