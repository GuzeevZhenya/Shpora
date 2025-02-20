import React, { useState } from "react";
import "../../../styles/ThemeForm.css";

export const ThemeForm = ({ createItem, onClose, title }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTheme = {
      id: Date.now().toString(),
      name,
      content,
      category,
      createdAt: new Date().toISOString(),
      code: "",
    };
    createItem(newTheme);
    onClose();
  };

  return (
    <div className="theme-form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название темы"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Описание"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit">Создать</button>
        <button type="button" onClick={onClose}>
          Отмена
        </button>
      </form>
    </div>
  );
};
