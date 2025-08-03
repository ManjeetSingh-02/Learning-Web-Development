import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
