import { useState, useEffect } from 'react';
import { URL_BASE } from '../api/config';

export function useCreateFavorite(username, dataPokemon) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;
      if (!dataPokemon) return;
      try {
        const endpoint = `${URL_BASE}/api/${username}/favorites`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPokemon),
        });
        if (!response.ok) throw Error(`Peticion rechazada: ${endpoint}`);
        const rawData = await response.json();
        setData(rawData.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, dataPokemon]);

  return { data, loading, error };
}
