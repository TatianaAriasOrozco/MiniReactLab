import { useState, useEffect } from 'react';

export function useGetPokemon(name = 'pikachu') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseData = (rawData) => {
    return {
      id: rawData.id,
      name: rawData.name,
      image: rawData.sprites.front_default,
      types: rawData.types.map((typeInfo) => typeInfo.type.name),
      height: rawData.height,
      weight: rawData.weight,
    };
  };

  const url = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      try {
        const endpoint = `${url}/${name}`;
        const response = await fetch(endpoint);
        if (!response.ok) throw Error(`Peticion rechazada: ${endpoint}`);
        const rawData = await response.json();
        setData(parseData(rawData));
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { data, loading, error };
}
