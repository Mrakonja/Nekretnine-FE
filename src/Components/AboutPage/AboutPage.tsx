import React from 'react';

interface AboutPageProps {
    some?: string;
  }

const AboutPage = ({some}:AboutPageProps) => {
  return (
    <div>
      <h1>About Page nekretnine!</h1>
      <p></p>
    </div>
  );
};

export default AboutPage;