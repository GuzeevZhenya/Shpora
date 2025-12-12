import React, { useState } from 'react';
import { Form } from '../Form/Form';
import { LoadingSpinner } from '../Loading/Loading';
import './ItemsList.css';
import { Item } from './Item/Item';

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
            <Item
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>
      ) : (
        <p>Нет данных.</p>
      )}
    </div>
  );
};
