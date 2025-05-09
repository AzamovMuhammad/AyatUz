// import axios from "axios";
// import React, { useState, useRef, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// const QuestionCard = () => {
//   const [searchParams] = useSearchParams();
//   const [savollar, setSavollar] = useState();

//   const type = searchParams.get("type");
//   const id = searchParams.get("id");

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.ayatquiz.com/api/v1/public/web/${type}/${id}/generate/?ordering=${type}`
//       )
//       .then((res) => {
//         setSavollar(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   console.log(id);
//   console.log("Res:", savollar);

//   return (
//     <div className="card-container">
//       <h1>Salom</h1>
//     </div>
//   );
// };

// export default QuestionCard;































import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "../style/QuestionCard.css";

const QuestionCard = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const id = searchParams.get("id");
  console.log(id);

  const navigate = useNavigate();
  const modalRef = useRef(null);
  const audioRef = useRef(null);

  // Load questions from API
  useEffect(() => {
    let isMounted = true; // faqat so'nggi so'rov ishlasin
    if (type && id) {
      axios
        .get(`https://api.ayatquiz.com/api/v1/public/web/${type}/${id}/generate/?ordering=${type}`)
        .then((res) => {
          if (isMounted) {
            console.log("Loaded:", id, res.data);
            setQuestions(res.data);
          }
        })
        .catch((err) => console.error(err));
    }
    return () => {
      isMounted = false; // eski so‘rov kelganda natijani yozmasin
    };
  }, [type, id]);

  console.log(questions);

  // Load new audio when current question changes
  useEffect(() => {
    if (questions.length > 0 && questions[current]?.audio?.file) {
      audioRef.current?.pause();
      audioRef.current = new Audio(questions[current].audio.file);
      setIsPlaying(false);
    }
  }, [current, questions]);

  // User selects an answer
  const handleOptionClick = (index) => {
    if (!answered) {
      setSelected(index);
      setAnswered(true);

      const selectedAnswerId = questions[current]?.answers[index]?.id;
      const correctAnswerId = questions[current]?.correct_answer?.id;

      if (selectedAnswerId === correctAnswerId) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  // Move to next question or finish
  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      audioRef.current?.pause();
      navigate(`/result`, {
        state: {
          score: correctAnswers,
          numOfQuest: questions.length,
          questType: type,
          testIndex: 10001,
        },
      });
    }
  };

  // Play or pause audio
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Modal controls
  const openModal = () => (modalRef.current.style.display = "flex");
  const closeModal = () => (modalRef.current.style.display = "none");
  const acseptCloseModal = () => navigate(`/user/home/stage?type=${type}`);

  // Current question data
  const currentQuestion = questions[current];
  const options = currentQuestion?.answers || [];

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

      {/* Main quiz card */}
      <div className="card">
        <div className="header">
          <button onClick={openModal} className="back-btn">
            <FaArrowLeftLong />
          </button>
          <h2>
            {current + 1}-savol / {questions.length} savol
          </h2>
          <p>{currentQuestion?.text}</p>
        </div>

        {/* Audio button */}
        <div className="audio-play" onClick={toggleAudio}>
          <FaPlay size={32} style={{ color: isPlaying ? "green" : "black" }} />
        </div>

        {/* Answer options */}
        <div className="options">
          {options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect =
              questions[current]?.correct_answer?.id === option?.id;

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
                <span className="label">{option.surah?.name}</span>

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

        {/* Next question */}
        <button className="next-btn" onClick={handleNext} disabled={!answered}>
          {current + 1 === questions.length ? "Tugatish" : "Keyingi test"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
