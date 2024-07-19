import { useState, useEffect } from 'react';

export function useFetch(endpoint, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!endpoint) return;
      try {
        const response = await fetch(endpoint, options);
        if (!response.ok) throw Error('Peticion rechazada: Url invalid?');
        const rawData = await response.json();
        setData(rawData);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, options]);

  return { data, loading, error };
}
