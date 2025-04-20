import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShareAlt, FaRedo, FaHome } from 'react-icons/fa';
import '../style/FinalResult.css';

function FinalResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  const isPassed = score >= 6;

  return (
    <div className="result-container">
      <div className={`result-card ${isPassed ? 'success' : 'fail'}`}>
        <h1>{isPassed ? 'Barakalloh!' : 'Afsus'}</h1>
        <p>Siz 1-darajadan {isPassed ? 'o‘tdingiz!' : 'o‘tolmadingiz!'}</p>
        <h2>
          {score}/<span>10</span>
        </h2>
        <p>{score} ta savolga to‘g‘ri javob berdingiz</p>
        <button
          className="main-btn"
          onClick={() => navigate(isPassed ? '/level2' : '/user/stage')}
        >
          {isPassed ? 'Keyingi bosqich' : 'Qayta topshirish'}
        </button>

        <div className="actions">
          <div>
            <FaShareAlt /> Natijani ulashish
          </div>
          <div>
            <FaHome /> Bosh sahifaga qaytish
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalResult;
