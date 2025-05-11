import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../style/entryTest.css";
import languages from "../language/language";

function EntryTest() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const savedLang = localStorage.getItem("selectedLanguage");
  const currentLang = languages.find((lang) => lang.code === savedLang);

  useEffect(() => {
    const isEntered = savedLang
    if (!isEntered) {
      navigate("/")
    }
  }, [])
  

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
          {currentLang?.entryTestPart.p}
        </p>
      </div>
    </div>
  );
}

export default EntryTest;
