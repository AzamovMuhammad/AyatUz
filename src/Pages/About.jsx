import React, { useEffect } from "react";
import "../style/about.css";

import oldQuron from "/images/about/quron_old.webp";
import quron from "/images/about/quron.webp";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  useEffect(() => {
    const isEntered = localStorage.getItem("selectedLanguage");
    if (!isEntered) {
      navigate('/')
    }
  }, []);

  return (
    <div className="about_page">
      <h1>Qur'on haqida</h1>
      <div className="firtInfo">
        <img src={oldQuron} alt="" />
        <p>
          Qurʼon (arabcha: القرآن‎‎ oʻqimoq, qiroat qilmoq) – musulmonlarning
          asosiy muqaddas kitobi. Islom eʼtiqodiga koʻra, Qurʼon vahiy orqali
          Muhammad paygʻambarga 610—632 yillar davomida nozil qilingan.
        </p>
      </div>
      <div className="secondInfo">
        <p>
          Allohning kalomi (Kalomulloh). Qurʼon „Kitob“ (yozuv), „Furqon“ (haq
          bilan botilning orasini ayiruvchi), „Zikr“ (eslatma), „Tanzil“ (nozil
          qilingan) kabi nomlar bilan atalib, „Nur“ (yorugʻlik), „Hudo“
          (hidoyat), „Muborak“ (barakotli), „Mubin“ (ochiq-ravshan), „Bushro“
          (xushxabar), „Aziz“ (eʼzozlanuvchi), „Majid“ (ulugʻ), „Bashir“
          (bashorat beruvchi), „Nazir“ (ogohlantiruvchi) kabi soʻzlar bilan
          sifatlangan. Islom olamida Qurʼon "musʼhaf" nomi bilan ham mashhur.
          Islom ulamolari Qurʼonning 30 xil nom va sifatlarini sanab oʻtganlar.
        </p>
        <img src={quron} alt="" />
      </div>
    </div>
  );
}

export default About;
