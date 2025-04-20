import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/entryTest.css";

function EntryTest() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/question");
    }, 5000); // 5000ms = 5 sekund

    return () => clearTimeout(timer); // Komponent unmount bo‘lsa tozalanadi
  }, [navigate]);

  return (
    <div className="enrty_container">
      <div className="middle">
        <h1>Ayat Quiz</h1>
        <p>
          A'uuzu billahi minash shaytonir rojiym. Bismillahir Rohmanir Rohiym!
        </p>
      </div>
    </div>
  );
}

export default EntryTest;
