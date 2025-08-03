import { useState, useEffect } from "react";

export default function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/all")
      .then((response) => response.json())
      .then((d) => setData(d.items))
      .catch((error) => setData([]));
  }, []);

  return (
    <div>
      {data.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}
