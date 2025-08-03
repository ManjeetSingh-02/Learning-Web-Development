import { useGetSpecialData } from './hooks/getSpecialData';

function App() {
  const { specialData, loading, error } = useGetSpecialData();

  return (
    <>
      <h1>Hooks</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {specialData.map(item => (
            <li key={item.id}>{item.name + ' ' + item.description}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
