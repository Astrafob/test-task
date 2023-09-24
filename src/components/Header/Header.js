import { useState } from 'react'
import headerLogo from '../../images/Frame.svg'

function Header() {
  const [isDrop, setDrop] = useState('false');

  return (
    <header className="header">
      <img src={headerLogo} className="logo-header" alt="Логотип CADesign" />
      <div className="header__container">
        <nav className="header-nav">
          <ul className="header-nav__menu">
            <li className="header-nav__list">
              <a
                className="header-nav__link"
                href="#about">
                О&nbsp;Нас
              </a>
            </li>
            <li className="header-nav__list">
              <a
                className="header-nav__link header-nav__link_active"
                href="#values">
                Наши&nbsp;ценности
              </a>
            </li>
            <li className="header-nav__list">
              <a
                className="header-nav__link"
                href="#vacancies">
                Вакансии
              </a>
            </li>
            <li className="header-nav__list">
              <a
                className="header-nav__link"
                href="#сareer">
                Начало&nbsp;карьеры
              </a>
            </li>
            <li className="header-nav__list">
              <a
                className="header-nav__link"
                href="#contacts">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <button className="header-dropbtn" onClick={() => setDrop(!isDrop)}>Социальные&nbsp;сети</button>
        <nav className="header__dropbtn-menu">
          <ul className={`header__dropbtn-list ${isDrop ? "header__dropbtn-list_active" : ""}`}>
            <li className="header__dropbtn-item">
              <svg className="header__dropbtn-icon">
                <use href="#vk"></use>
              </svg>
            </li>
            <li className="header__dropbtn-item">
              <svg className="header__dropbtn-icon">
                <use href="#odnoklasniky"></use>
              </svg>
            </li>
            <li className="header__dropbtn-item">
              <svg className="header__dropbtn-icon">
                <use href="#facebook"></use>
              </svg>
            </li>
            <li className="header__dropbtn-item">
              <svg className="header__dropbtn-icon">
                <use href="#instagram"></use>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  )
}

export default Header