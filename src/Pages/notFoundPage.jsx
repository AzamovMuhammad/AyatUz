import React from 'react'
import logo from '/images/brandLogo/ayatLogo.webp'
import '../style/notFoundPage.css'
import languages from '../language/language'

function NotFoundPage() {

  const savedLang = localStorage.getItem("selectedLanguage")
  const currentLang = languages.find((lang) => lang.code === savedLang)
  return (
    <div className='notPage'>
        <div className='notPageImg'>
            <img src={logo} alt="logo" />
        </div>
        <div className='notPageText'>
            <h1>404</h1>
            <p>{currentLang?.notFound.p}</p>
            <h3>{currentLang?.notFound.h3}</h3>
        </div>
    </div>
  )
}

export default NotFoundPage