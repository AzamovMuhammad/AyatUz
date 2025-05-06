import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../style/entryTest.css";

function EntryTest() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/question?type=${type}&id=${id}`);
    }, 5000);

    return () => clearTimeout(timer);
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
