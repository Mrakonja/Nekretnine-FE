import React from 'react';

interface HomePageProps {
    some?: string;
  }

const HomePage = ({some}:HomePageProps) => {
  return (
    <div>
      <h1>HomePage nekretnine!</h1>
      <p></p>
    </div>
  );
};

export default HomePage;