import React from 'react'
import logo from '../assets/image/brandLogo/ayatLogo.png'
import '../style/notFoundPage.css'

function NotFoundPage() {
  return (
    <div className='notPage'>
        <div className='notPageImg'>
            <img src={logo} alt="logo" />
        </div>
        <div className='notPageText'>
            <h1>404</h1>
            <p>Bu xato!</p>
            <h3>Ushbu serverda so'ralgan url topilmadi. Biz bilgan hamma narsa shu.</h3>
        </div>
    </div>
  )
}

export default NotFoundPage