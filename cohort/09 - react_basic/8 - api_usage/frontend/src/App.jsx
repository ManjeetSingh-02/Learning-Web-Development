import { useState, useEffect } from "react";
import Counter from "./Counter";
import All from "./All";

function App() {
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage("failed"));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>{message}</h2>
      <Counter />
      <All />
    </>
  );
}

export default App;
