import React from 'react';
import style from './AboutPage.module.css'

interface AboutPageProps {
    some?: string;
  }

const AboutPage = ({some}:AboutPageProps) => {
  return (
    <div className={style.wrapper}>
      <h1>About Page nekretnine!</h1>
      <p></p>
    </div>
  );
};

export default AboutPage;