import { useEffect, useState } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';

const Favorites = ({ username }) => {
  const { data, loading, error, fetchData } = useFetch();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(username);
    fetchData(`${URL_BASE}/api/${username}/favorites`);
    console.log('FAVORITOS DATA:', data);
    setFavorites(data);
  }, [username]);

  //const endpoint = `${URL_BASE}/api/${username}/favorites`;
  //console.log(endpoint);

  console.log(data);

  return <div>{data}</div>;
};

export default Favorites;
