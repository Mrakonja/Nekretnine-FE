import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import { MainContextProvider } from './Context/MainContext';
import './styles/global.scss'

const App = () => {
  return (
    <BrowserRouter>
    <MainContextProvider>
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
    </MainContextProvider>
  </BrowserRouter>
  );
};

export default App;
