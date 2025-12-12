import React from 'react';
import '../ItemsList.css';
import { CodeBlock } from '../../CodeOutput/CodeOutput';

export const Item = ({ item, onRemove, onUpdate }) => {
  return (
    <li className="item">
      <button onClick={() => onRemove(item.id)} className="delete-button">
        &times;
      </button>

      <button onClick={() => onUpdate(item)} className="update-button">
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
  );
};
