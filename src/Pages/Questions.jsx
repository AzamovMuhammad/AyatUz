import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../style/QuestionCard.css";

import falaq from "../assets/audio/falaq.mp3";
import asr from "../assets/audio/asr.mp3";
import fil from "../assets/audio/fil.mp3";
import humazah from "../assets/audio/humazah.mp3";
import kafirun from "../assets/audio/kafirun.mp3";
import kavsar from "../assets/audio/kavsar.mp3";
import maun from "../assets/audio/maun.mp3";
import nas from "../assets/audio/nas.mp3";
import quraish from "../assets/audio/quraish.mp3";
import takasur from "../assets/audio/takasur.mp3";

const questions = [
  {
    text: "Qiroatdagi oyat qaysi suraga tegishli?",
    audio: falaq,
    options: [
      { label: "A", text: "An-Nas", isCorrect: false },
      { label: "B", text: "Al-Baqarah", isCorrect: false },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Falaq", isCorrect: true },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: asr,
    options: [
      { label: "A", text: "Al-Fil", isCorrect: false },
      { label: "B", text: "Al-Humazah", isCorrect: false },
      { label: "C", text: "Al-Asr", isCorrect: true },
      { label: "D", text: "An-Nasr", isCorrect: false },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: fil,
    options: [
      { label: "A", text: "Al-Fil", isCorrect: true },
      { label: "B", text: "Al-Falaq", isCorrect: false },
      { label: "C", text: "Al-Ikhlas", isCorrect: false },
      { label: "D", text: "An-Ma'un", isCorrect: false },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: humazah,
    options: [
      { label: "A", text: "Al-Fil", isCorrect: false },
      { label: "B", text: "Al-Takathur", isCorrect: false },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Humazah", isCorrect: true },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: kafirun,
    options: [
      { label: "A", text: "Al-Fil", isCorrect: false },
      { label: "B", text: "Al-Kafirun", isCorrect: true },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Humazah", isCorrect: false },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: kavsar,
    options: [
      { label: "A", text: "Al-Kauthar", isCorrect: true },
      { label: "B", text: "Al-Kafirun", isCorrect: false },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Humazah", isCorrect: false },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: maun,
    options: [
      { label: "A", text: "Al-Kauthar", isCorrect: false },
      { label: "B", text: "Al-Kafirun", isCorrect: false },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Ma'un", isCorrect: true },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: nas,
    options: [
      { label: "A", text: "Al-Kauthar", isCorrect: false },
      { label: "B", text: "An-Nas", isCorrect: true },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Ma'un", isCorrect: false },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: quraish,
    options: [
      { label: "A", text: "Quraish", isCorrect: true },
      { label: "B", text: "An-Nas", isCorrect: false },
      { label: "C", text: "Al-Masad", isCorrect: false },
      { label: "D", text: "Al-Ma'un", isCorrect: false },
    ],
  },
  {
    text: "Bu oyat qaysi suradan olingan?",
    audio: takasur,
    options: [
      { label: "A", text: "Quraish", isCorrect: false },
      { label: "B", text: "An-Nas", isCorrect: false },
      { label: "C", text: "Al-Takathur", isCorrect: true },
      { label: "D", text: "Al-Ma'un", isCorrect: false },
    ],
  },
];

const QuestionCard = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const audioRef = useRef(new Audio(questions[0].audio));
  const navigate = useNavigate();
  const modalRef = useRef(null);
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(questions[current].audio);
    setIsPlaying(false);
  }, [current]);

  const handleOptionClick = (index) => {
    if (!answered) {
      setSelected(index);
      setAnswered(true);

      if (options[index].isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      audioRef.current.pause();
      navigate("/result", { state: { score: correctAnswers } });
    }
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const questionModal = document.querySelector(".questionModal");

  function openModal() {
    if (modalRef.current) {
      modalRef.current.style.display = "flex";
    }
    // questionModal.style.display = "flex";
  }
  function closeModal() {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
    }
    // questionModal.style.display = "none";
  }
  function acseptCloseModal() {
    navigate("/user/stage");
  }

  const { text, options } = questions[current];
  let correctAnswear;
  return (
    <div className="card-container">
      <div ref={modalRef} className="questionModal">
        <div className="middle">
          <h1>
            Agar chiqsangiz, testni qaytadan boshlashingizga to’g’ri keladi!
          </h1>
          <div className="questionBtns">
            <button onClick={acseptCloseModal} className="rozi">
              Roziman
            </button>
            <button onClick={closeModal} className="bekor">
              Bekor qilish
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="header">
          <button onClick={openModal} className="back-btn">
            <FaArrowLeftLong />
          </button>
          <h2>
            {current + 1}-savol / {questions.length} savol
          </h2>
          <p>{text}</p>
        </div>

        <div className="audio-play" onClick={toggleAudio}>
          <FaPlay size={32} style={{ color: isPlaying ? "green" : "black" }} />
        </div>

        <div className="options">
          {options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect = option.isCorrect;

            return (
              <button
                key={idx}
                className={`option ${isSelected ? "selected" : ""} ${
                  answered
                    ? isCorrect
                      ? "correct"
                      : isSelected
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => handleOptionClick(idx)}
                disabled={answered}>
                <span className="label">{option.label}</span>
                <span className="text">{option.text}</span>

                {answered && isSelected && !isCorrect && (
                  <FaTimesCircle className="icon wrong-icon" />
                )}

                {answered && isCorrect && (
                  <FaCheckCircle className="icon correct-icon" />
                )}
              </button>
            );
          })}
        </div>

        <button className="next-btn" onClick={handleNext} disabled={!answered}>
          {current + 1 === questions.length ? "Tugatish" : "Keyingi test"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
