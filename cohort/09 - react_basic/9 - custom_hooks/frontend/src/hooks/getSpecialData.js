import { useState, useEffect } from 'react';

export function useGetSpecialData() {
  const [specialData, setSpecialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/special')
      .then(res => res.json())
      .then(data => setSpecialData(data.specialItems))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { specialData, loading, error };
}
