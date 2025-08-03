import { useContext, createContext, useState } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(0);

  function addNotification() {
    setCount(prevCount => prevCount + 1);
  }

  function resetNotification() {
    setCount(0);
  }

  return (
    <NotificationContext value={{ count, addNotification, resetNotification }}>
      {children}
    </NotificationContext>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
