import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../common/components/Header/Header';
import '../App.css';

export const App = () => {
  return (
    <div className="app-container">
      <Header className="header" />

      <div className="content-container">
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
