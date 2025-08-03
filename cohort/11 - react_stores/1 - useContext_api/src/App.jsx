import { useNotification } from './context/NotificationContext';

function App() {
  const { count, addNotification, resetNotification } = useNotification();
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>Context API Example</h1>
      <button onClick={addNotification}>Add</button>
      {count}
      <button onClick={resetNotification}>Reset</button>
    </div>
  );
}

export default App;
