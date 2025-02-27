import React from 'react';

function TodoItem({ item, onToggleComplete, onRemove }) {
  const { id, text, completed } = item;

  return (
    <li style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textDecoration: completed ? 'line-through' : 'none'
        }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          style={{ marginRight: '8px' }}
        />
        <span>{text}</span>
      </div>
      <button onClick={() => onRemove(id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
