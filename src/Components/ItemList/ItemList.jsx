import React, { useState } from "react";
import Form from "../Form/Form";
import CodeBlock from "../CodeOutput/CodeOutput";
import LoadingSpinner from "../Loading/Loading";
import "../../styles/ItemsList.css";

export const ItemList = ({
  items,
  buttonName,
  itemMutationQuery,
  title,
  removeFunction,
  updateFunction,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    if (showForm) {
      setEditingItem(null);
    }
  };

  const handleUpdate = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleRemove = (id) => {
    removeFunction(id);
  };

  if (!items) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">{title}</h1>
      <div className="button-container">
        <button onClick={toggleForm}>{buttonName}</button>
      </div>
      {showForm && (
        <Form
          createItem={editingItem ? updateFunction : itemMutationQuery}
          onClose={toggleForm}
          title={buttonName}
          initialData={editingItem}
        />
      )}
      {items.length > 0 ? (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <button
                onClick={() => handleRemove(item.id)}
                className="delete-button"
              >
                &times;
              </button>

              <button
                onClick={() => handleUpdate(item)}
                className="update-button"
              >
                Update
              </button>
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              {item.code && (
                <div>
                  <h4>Пример кода:</h4>
                  <pre className="code-display">
                    <CodeBlock code={item.code} />
                  </pre>
                </div>
              )}

              {item.officialDocLink && (
                <a
                  href={item.officialDocLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Официальная документация
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет данных.</p>
      )}
    </div>
  );
};
