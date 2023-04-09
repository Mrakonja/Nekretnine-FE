import React from 'react';
import { Outlet, Link } from "react-router-dom";

interface LayoutProps {
    some?: string;
  }

const Layout = ({ }:LayoutProps) => {
  return (
    <div>
      <header>
       header nekretnine
      </header>
      <nav>
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
      <main>
      <Outlet />
      </main>
      <footer>
       footer
      </footer>
    </div>
  );
};

export default Layout;