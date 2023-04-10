import React from 'react';
import style from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {

}

const Header:React.FC<HeaderProps> = () => {
  return (
    <header className={style.wrapper}>
        <h1>    
        header nekretnine
        </h1>
        <Navigation />
    </header>
  )
}

export default Header;
