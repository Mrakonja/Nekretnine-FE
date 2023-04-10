import React from 'react';
import { Outlet } from "react-router-dom";
import style from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
    some?: string;
  }

const Layout = ({ }:LayoutProps) => {
  return (
    <div className={style.wrapper}>
        <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;