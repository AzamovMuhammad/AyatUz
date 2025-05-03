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

  useEffect(() => {
    try {
      axios
        .get(`https://api.ayatquiz.com/api/v1/public/web/${questType}/`)
        .then((res) => {
          if (questType === 'quiz') {
            setQuestion(res.data.results);
            
          } else {
            setQuestion(res.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const navigate = useNavigate();

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
      {question.map((level) => (
        <div
          key={level.id}
          className={`level-btn unlocked`}
          onClick={() => {
            navigate(`/entry?type=${questType}&id=${level.id}`);
          }}>
          <span>{level.index-10000} - bosqich</span>
          <span>{level.count} ta savol</span>
          <FaPlay />
        </div>
      ))}
    </div>
  );
}

export default Stage;
