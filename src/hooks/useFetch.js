import { useState, useEffect } from 'react';

export function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const noOP = () => {};
  const fetchData = async (url, options = {}, setter = noOP) => {
    if (!url) return;
    if (loading) return;
    try {
      setError(null);
      setLoading(true);
      console.log('endpoint', url);
      const response = await fetch(url, options);
      if (!response.ok) throw Error('Url invalid?');
      if ((options && options.method !== 'DELETE') || !options) {
        const rawData = await response.json();
        if (rawData) {
          console.log('rawData', rawData);
          setData(rawData);
          setter(rawData);
          return data;
        }
      }
      return true;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
