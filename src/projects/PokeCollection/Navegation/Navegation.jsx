import { useEffect, useState } from 'react';
import Favorites from './Favorites/Favorites';
import { Search } from './Search/Search';
import { useFetch } from '../../../hooks/useFetch';
import { URL_BASE } from '../api/config';

const Navegation = ({ username }) => {
  const { data, loading, error, fetchData } = useFetch();
  //const [favorites, setFavorites] = useState([]);

  /* useEffect(() => {
    console.log(username);
    fetchData(`${URL_BASE}/api/${username}/favorites`);
    console.log('FAVORITOS DATA:', data);
    setFavorites(data);
  }, [username]); */

  return (
    <div>
      <Search username={username} />
      <Favorites username={username} />
    </div>
  );
};

export default Navegation;
