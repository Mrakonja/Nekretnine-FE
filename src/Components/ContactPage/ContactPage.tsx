import React from 'react';

interface ContactPageProps {
    some?: string;
  }

const ContactPage = ({some}:ContactPageProps) => {
  return (
    <div>
      <h1>Contact Page Nekretnine!</h1>
      <p></p>
    </div>
  );
};

export default ContactPage;