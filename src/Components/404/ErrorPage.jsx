import React from "react";
import "../../styles/ErrorPage.css";

export const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Ошибка: Страница не найдена.</p>
      <p className="scp-message">SCP-404: Объект отсутствует.</p>
      <a href="/" className="return-home">
        Вернуться на главную страницу
      </a>
      <div className="animation">
        <div className="scp-icon">☢️</div>
      </div>
    </div>
  );
};
