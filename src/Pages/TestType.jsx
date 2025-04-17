import React from "react";
import "../style/testType.css";

import img from "../assets/image/testType/Quran_2.svg";
import { FaQuestion } from "react-icons/fa";

function openModal() {
    const questionModal = document.querySelector('.questionModal')
    questionModal.style.display = "flex"
}
function closeModal() {
    const questionModal = document.querySelector('.questionModal')
    questionModal.style.display = "none"
}
function TestType() {



  return (
    <div className="container">
      <div className="icon">
        <button className="shadow" onClick={openModal}>
          <FaQuestion />
        </button>
      </div>
      <div className="questionModal">
        <div className="middleDiv">
            <p className="bosqich">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fuga quo? Vitae id doloribus ipsum labore! Quia cum mollitia provident commodi iusto expedita tempora unde ex dolore. Alias mollitia tempora assumenda atque iste reprehenderit!</p>
            <p className="butun">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates vel eos, explicabo nobis dolor saepe quas. Aliquam, explicabo! Aliquid ut odit at inventore odio cupiditate natus officia praesentium eius ipsum, hic et iste?</p>
            <p className="juz">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt veniam aspernatur cum, qui enim obcaecati? Numquam at adipisci, atque, libero deleniti ipsam soluta magnam recusandae optio incidunt odio sit ut vitae esse eligendi.</p>
            <p className="sura">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur minima saepe voluptatem ducimus? Doloribus alias et, autem similique nostrum voluptatem? Rem, dolores nemo doloribus vel quos consectetur illo dicta aperiam!</p>
            <h3>Qur'oni Karim oyatlarini zavq bilan tinglang va toping!</h3>
            <button onClick={closeModal}>Tushunarli, rahmat</button>
        </div>
      </div>
      <img src={img} alt="" />
      <h1>Iltimos, test turini tanlang</h1>
      <div className="btns">
        <button>Bosqichma-bosqich</button>
        <button>Butun Qur’on bo’yicha</button>
        <button>Juz bo’yicha</button>
        <button>Sura bo’yicha</button>
      </div>
    </div>
  );
}

export default TestType;
