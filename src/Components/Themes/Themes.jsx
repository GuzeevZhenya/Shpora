import React, { useState } from "react";
import { useGetAllMateryalQuery } from "../../feature/GetInfo";
import { Link } from "react-router-dom";
import "../../styles/ThemesContent.css";
import { ThemeForm } from "../Form/ThemeForm/ThemeForm";
import LoadingSpinner from "../Loading/Loading";
import { useCreateThemeMutation } from "../../feature/GetInfo";
import mainImage from "../../assets/main.jpeg"; // Укажите правильный путь

export const Themes = () => {
  const { data: themes, isLoading } = useGetAllMateryalQuery();
  const [showForm, setShowForm] = useState(false);
  const [createTheme] = useCreateThemeMutation();

  const handleCreateTheme = async (theme) => {
    try {
      await createTheme(theme).unwrap(); // Отправка данных на сервер
      console.log("Тема успешно создана!");
    } catch (error) {
      console.error("Ошибка при создании темы:", error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const toggleForm = () => setShowForm(!showForm);

  const uniqueCategories = [...new Set(themes.map((item) => item.category))];

  return (
    <div className="themes-container">
      <div className="button-container">
        <button onClick={toggleForm}>Создать новую тему</button>
      </div>

      {showForm && (
        <ThemeForm
          createItem={handleCreateTheme}
          onClose={toggleForm}
          title="Создать новую тему"
        />
      )}

      <div className="content-container">
        <div className="text-content">
          <h1>Темы:</h1>
          {uniqueCategories?.map((el) => (
            <div key={el}>
              <Link className="category-link" to={`/themes/${el}`}>
                {el}
              </Link>
            </div>
          ))}
        </div>
        <img src={mainImage} alt="map" className="map-image" />
      </div>
    </div>
  );
};
