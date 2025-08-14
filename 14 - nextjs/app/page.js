'use client';

import { todoService } from '@/services/todoService';
import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    todoService
      .getAllTodos()
      .then(data => setTodos(data))
      .catch(error => setErrorMessage('Error fetching todos'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div className='m-10'>
      <h1>Total Todos: {todos.length}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.title}>Title: {todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
