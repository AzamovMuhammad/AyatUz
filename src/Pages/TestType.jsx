import React from 'react'
import '../style/testType.css'

import img from '../assets/image/testType/Quran_2.svg'

function TestType() {
  return (
    <div className='container'>
        <img src={img} alt="" />
        <h1>Iltimos, test turini tanlang</h1>
        <div className='btns'>
            <button>Bosqichma-bosqich</button>
            <button>Butun Qur’on bo’yicha</button>
            <button>Juz bo’yicha</button>
            <button>Sura bo’yicha</button>
        </div>
    </div>
  )
}

export default TestType