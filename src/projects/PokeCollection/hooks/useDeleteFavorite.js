import { useState, useEffect } from 'react';
import { URL_BASE } from '../api/config';

export function useDeleteFavorites(username, id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;
      try {
        const endpoint = `${URL_BASE}/api/${username}/favorites/${id}`;
        const response = await fetch(endpoint, {
          method: 'DELETE',
        });
        if (!response.ok) throw Error(`Peticion rechazada: ${endpoint}`);
        const rawData = await response.json();
        setData(null);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { data, loading, error };
}
