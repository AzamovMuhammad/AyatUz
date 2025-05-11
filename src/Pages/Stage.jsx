import React, { useEffect, useState } from "react";
import { FaLock, FaPlay } from "react-icons/fa";
import "../style/stage.css";

import { useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";

function Stage() {
  const [question, setQuestion] = useState([]);
  const [searchParams] = useSearchParams();
  const questType = searchParams.get("type");
  const navigate = useNavigate();
  console.log(questType);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.ayatquiz.com/api/v1/public/web/${questType}/?ordering=-index`
        );
        console.log("to‘liq res.data:", res.data);
        console.log("res.data.results:", res.data.results);
        const questions = res.data.results;
        setQuestion(questions);
        console.log("useState question:", questions);
        if (
          !localStorage.getItem("currentStageIndex") &&
          questions.length > 0
        ) {
          localStorage.setItem("currentStageIndex", questions[0].index);
        }
      } catch (error) {
        console.log("Xatolik:", error);
      }
    };
    console.log(question);

    fetchData();
  }, [questType]);

  useEffect(() => {
    console.log("useEffectdagi question:", question);
  }, [question]);

  const currentStageIndex =
    parseInt(localStorage.getItem("currentStageIndex")) || 0;

  const isUnlocked = (index) => {
    return index <= currentStageIndex;
  };

  return (
    <div className="level-container">
      <button
        className="shadow"
        onClick={() => {
          navigate("/user/home/test");
        }}>
        <FaArrowLeftLong />
      </button>
      <h1 className="intro-text">Bismillahir rohmanir rohiym, boshladik!</h1>
      {[...question].reverse().map((level, idx) => {
  const unlocked = isUnlocked(level.index);
  return (
    <div
      key={level.id}
      className={`level-btn ${unlocked ? "unlocked" : "locked"}`}
      onClick={() => {
        if (unlocked) {
          navigate(`/entry?type=${questType}&id=${level.id}`);
        }
      }}>
      <span>{idx + 1} - bosqich</span>
      <span>{level.count} ta savol</span>
      {unlocked ? <FaPlay /> : <FaLock />}
    </div>
  );
})}

    </div>
  );
}

export default Stage;
