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

  //onFavorite:
  /* Agregar o borrar a la lista de  favoritos con pokemon */
  const handleFavorite = (pokemon) => {
    console.log('handleFavorite:', pokemon);
    const searchPokemon = favoriteList.find((poke) => poke.id === pokemon.id);
    console.log(searchPokemon, ' es el elegido!');
    if (searchPokemon) {
      setFavoriteList(favoriteList.filter((poke) => poke.id !== pokemon.id));
    } else {
      setFavoriteList([
        ...favoriteList,
        {
          id: pokemon.id,
          name: pokemon.name,
          avatarUrl: pokemon.sprites.front_default,
          types: pokemon.types.map((typeInfo) => typeInfo.type.name),
        },
      ]);
    }
  };

  return (
    <div>
      {favoriteList && <Favorites favorites={favoriteList} />}
      <button onClick={getFavorites}>click</button>
      {favoriteList && (
        <Search
          username={username}
          fetchFavorites={fetchFavorites}
          onFavorite={handleFavorite}
          favoriteList={favoriteList}
        />
      )}
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
