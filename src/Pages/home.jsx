import React from "react";

import { FaCircleArrowRight } from "react-icons/fa6";

import "../style/homePage.css";

import homeImg from "../assets/image/homeImg/man.png";

function Home() {
  return (
    <div className="homePage">
      <h1 className="home_title">Assalomu alaykum aziz dindoshim!</h1>
      <div className="home_img">
        <img src={homeImg} alt="" />
      </div>
      <h2 className="home_text">
        Mazkur testda siz Qur’oni Karim oyatlarini tinglab, ularni qaysi suraga
        tegishli ekanligini topishingiz kerak.
      </h2>
      <button className="home_btn">Testni topshirish <FaCircleArrowRight/> </button>
    </div>
  );
}

export default Home;
