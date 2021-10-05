import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo.png';

export default function Header() {

  addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__menu__movil');
    if (button){
      button.addEventListener('click', () => {
        const menuList = document.querySelector('.header__menu__list');
        menuList.classList.toggle('show');
      });
    }
  });

  return (
    <header className='header'>
        <img className='header--logo' src={logo} alt='logo_rick_and_morty' />
        <nav className='header__menu'>
            <ul className='header__menu__list'>
                <li className='header__menu__item'><a className='header__menu__item--a'  href=''>Home</a></li>
                <li className='header__menu__item'><a className='header__menu__item--a'  href=''>Characters</a></li>
            </ul>
        </nav>
        <span className='header__menu__movil'><img className='header__menu__movil--icon' src="https://img.icons8.com/ios-filled/50/ffffff/more.png" /></span>
    </header>
  )
}
