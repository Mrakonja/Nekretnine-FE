import React from 'react';
import TestContext from '../TestContext';
import style from './HomePage.module.css'

interface HomePageProps {
    some?: string;
  }

const HomePage = ({some}:HomePageProps) => {
  return (
    <div className={style.wrapper}>
      <h1>HomePage nekretnine!</h1>
      <TestContext />
      <p></p>
    </div>
  );
};

export default HomePage;