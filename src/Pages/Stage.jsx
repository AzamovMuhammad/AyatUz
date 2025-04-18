import React from "react";
import { FaLock, FaPlay } from "react-icons/fa";
import "../style/stage.css";

import { useNavigate } from "react-router-dom";

const levels = [
  { id: 1, name: "1-bosqich", unlocked: true },
  { id: 2, name: "2-bosqich", unlocked: false },
  { id: 3, name: "3-bosqich", unlocked: false },
  { id: 4, name: "4-bosqich", unlocked: false },
  { id: 5, name: "5-bosqich", unlocked: false },
  { id: 6, name: "6-bosqich", unlocked: false },
  { id: 7, name: "7-bosqich", unlocked: false },
  { id: 8, name: "8-bosqich", unlocked: false },
];

function Stage() {
  const navigate = useNavigate();

  return (
    <div className="level-container">
      <h1 className="intro-text">Bismillahir rohmanir rohiym, boshladik!</h1>
      {levels.map((level) => (
        <div
          key={level.id}
          className={`level-btn ${level.unlocked ? "unlocked" : "locked"}`}
          onClick={() => {
            if (level.unlocked) {
              navigate("/entry");
            } else {
              alert("Bu bosqich hozircha yopiq.");
            }
          }}>
          <span>{level.name}</span>
          {level.unlocked ? <FaPlay /> : <FaLock />}
        </div>
      ))}
    </div>
  );
}

export default Stage;
