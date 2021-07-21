import React from 'react';
import './index.scss';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='#' className='header__logo__link'>
          <img className='header__logo__img' src='https://www.fwd.com.sg/assets/app/images/logos/fwd-logo.png' alt='logo'/>
        </a>
      </div>
      <ul className='header__breadcrumb'>
        <li className='header__breadcrumb__item'>
          <a href='#' className='header__breadcrumb__item__link'>Home</a>
        </li>
        <li className='header__breadcrumb__item'>
          <a href='#' className='header__breadcrumb__item__link'>Term Life Plus Insurance</a>
        </li>
        <li className='header__breadcrumb__item'>
          <a href='#' className='header__breadcrumb__item__link'>Online Quote</a>
        </li>
      </ul>
    </header>
  )
}
export default Header;