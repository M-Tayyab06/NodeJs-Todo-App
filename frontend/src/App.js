import React, { useState, useEffect } from 'react';
import { getTodos, addTodo } from './api';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const handleAddTodo = async () => {
    await addTodo(task);
    setTask('');
    fetchTodos();
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;