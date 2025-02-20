import React, { useState, useEffect } from "react";
import "../../styles/HookForm.css";

const Form = ({ createItem, onClose, title, initialData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [officialDocLink, setOfficialDocLink] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCode(initialData.code || "");
      setOfficialDocLink(initialData.officialDocLink || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: initialData ? initialData.id : Date.now().toString(),
      name,
      description,
      code,
      officialDocLink,
    };
    createItem(newItem);
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <textarea
            placeholder="Пример кода"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ссылка на документацию"
            value={officialDocLink}
            onChange={(e) => setOfficialDocLink(e.target.value)}
          />
          <button type="submit">{initialData ? "Обновить" : "Создать"}</button>
          <button type="button" onClick={onClose}>
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
