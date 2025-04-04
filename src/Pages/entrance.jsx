import React, { useState, useEffect } from "react";
import "../style/entrance.css";

const EntrancePart = ({ onComplete }) => {
  const [showText, setShowText] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
      setLoading(true);
      let interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 500); // Sahifani o'zgartirish
            return 100;
          }
          return oldProgress + 10;
        });
      }, 300);
    }, 5000);
  }, [onComplete]);

  return (
    <div className="ayat-quiz-container">
      {showText ? (
        <div className="ayat-content">
          <h1>Ayat Quiz</h1>
          <p>Qur'onni mo'minlar uchun shifo va rahmat o'laroq nozil qilurmiz</p>
          <span>Isro, 82</span>
        </div>
      ) : (
        <div className="loading-container">
          <p>Yuklanmoqda...</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntrancePart;
