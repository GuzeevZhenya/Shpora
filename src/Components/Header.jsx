import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Обратите внимание на путь
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };
  return (
    <header className="header">
      <div className="logoContainer"></div>
      <button onClick={handleBack}>Back</button>

      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/components" className="navLink">
              Components
            </Link>
          </li>
          <li className="navItem">
            <Link to="/hooks" className="navLink">
              Hooks
            </Link>
          </li>
          <li className="navItem">
            <Link to="/cheatsheet" className="navLink">
              Cheatsheet
            </Link>
          </li>
          <li className="navItem">
            <Link to="/link" className="navLink">
              Link
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
