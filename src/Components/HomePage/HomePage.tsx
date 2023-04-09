import React from 'react';
import TestContext from '../TestContext';

interface HomePageProps {
    some?: string;
  }

const HomePage = ({some}:HomePageProps) => {
  return (
    <div>
      <h1>HomePage nekretnine!</h1>
      <TestContext />
      <p></p>
    </div>
  );
};

export default HomePage;