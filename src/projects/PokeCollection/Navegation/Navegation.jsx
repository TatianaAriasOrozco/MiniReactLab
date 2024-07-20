import { useEffect, useState } from 'react';
import Favorites from './Favorites/Favorites';
import { Search } from './Search/Search';
import { useFetch } from '../../../hooks/useFetch';
import { URL_BASE } from '../api/config';

const Navigation = ({ username }) => {
  const { data: favorites, fetchData: fetchFavorites } = useFetch();
  const [favoriteList, setFavoriteList] = useState(null);

  const getFavorites = async () => {
    await fetchFavorites(
      `${URL_BASE}/api/${username}/favorites`,
      {},
      (response) => {
        setFavoriteList(response.data); //{ok:true, data: [favoritos]}
      }
    );
  };
  useEffect(() => {
    getFavorites();
  }, [username]);

  const handleFavorite = (pokemon) => {
    /* Agregar o borrar a la lista de  favoritos con pokemon */
  };

  return (
    <div>
      {favoriteList && <Favorites favorites={favoriteList} />}
      <button onClick={getFavorites}>click</button>
      <Search
        username={username}
        fetchFavorites={fetchFavorites}
        onFavorite={handleFavorite}
      />
      {/* <Favorites
        username={username}
        favoritesData={favoritesData}
        isLoading={isLoading}
        error={error}
      /> */}
    </div>
  );
};

export default Navigation;
