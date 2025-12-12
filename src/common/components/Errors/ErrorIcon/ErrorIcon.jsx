import React from 'react';
import './Error.css';

export const ErrorIcon = () => {
  return (
    <div className="error-icon">
      <div className="icon-circle">
        <div className="exclamation-mark">!</div>
      </div>
      <p className="error-message">Нет данных</p>
    </div>
  );
};
