import React from 'react';
import style from './Footer.module.scss';

interface FooterProps {

}

const Footer:React.FC<FooterProps> = () => {
  return (
    <footer className={style.wrapper}>footer nekretnine</footer>
  )
}

export default Footer;
