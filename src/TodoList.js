import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    console.log(todos);
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ margin: '0 auto' }}>
      <h1>TODO LIST</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleAddTodo()} style={{ padding: '8px 12px' }}>
          Add
        </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onToggleComplete={toggleComplete}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
