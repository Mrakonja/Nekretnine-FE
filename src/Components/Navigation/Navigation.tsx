import React from 'react';
import { Outlet, Link } from "react-router-dom";
import style from './Navigation.module.scss';

interface NavigationProps {

}

const Navigation:React.FC<NavigationProps> = () => {
  return (
    <nav className={style.wrapper}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
