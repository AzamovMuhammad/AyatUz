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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.ayatquiz.com/api/v1/public/web/quiz/?ordering"
        );
        if (questType === "quiz") {
          setQuestion(res.data.results);
        } else {
          setQuestion(res.data);
        }
      } catch (error) {
        console.log("Xatolik:", error);
      }
    };

    fetchData();
  }, [questType]);

  console.log(question);
  const completedStages =
    JSON.parse(localStorage.getItem("completedStages")) || [];

  const isUnlocked = (index) => {
    if (index === 10001) return true; // always unlock first
    return completedStages.includes(index - 1);
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
      {question.map((level) => {
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
            <span>{level.index - 10000} - bosqich</span>
            <span>{level.count} ta savol</span>
            {unlocked ? <FaPlay /> : <FaLock />}
          </div>
        );
      })}
    </div>
  );
}

export default Stage;
