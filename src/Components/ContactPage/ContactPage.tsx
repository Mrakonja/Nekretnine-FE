import React from 'react';
import style from './ContactPage.module.css'

interface ContactPageProps {
    some?: string;
  }

const ContactPage = ({some}:ContactPageProps) => {
  return (
    <div className={style.wrapper}>
      <h1>Contact Page Nekretnine!</h1>
      <p></p>
    </div>
  );
};

export default ContactPage;