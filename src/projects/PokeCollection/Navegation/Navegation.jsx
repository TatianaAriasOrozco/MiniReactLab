import { useEffect, useState } from 'react';
import Favorites from './Favorites/Favorites';
import { Search } from './Search/Search';
import { useFetch } from '../../../hooks/useFetch';
import { URL_BASE } from '../api/config';
import styles from '../Navegation/Navegation.module.css';

const Navigation = ({ username, setUsername }) => {
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
          avatarUrl: pokemon.sprites.other['official-artwork'].front_default,
          types: pokemon.types.map((typeInfo) => typeInfo.type.name),
        },
      ]);
    }
  };

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.searchContainer}>
        {/* <button onClick={getFavorites}>click</button> */}
        <Search
          username={username}
          fetchFavorites={fetchFavorites}
          onFavorite={handleFavorite}
          favoriteList={favoriteList}
        />
        {/* <Favorites
        username={username}
        favoritesData={favoritesData}
        isLoading={isLoading}
        error={error}
        /> */}
      </div>
      <div className={styles.favoritesContainer}>
        <div className={styles.favoritesHeader}>
          <h2 className={styles.title}>Favorites</h2>
          <button onClick={() => setUsername('')}>Exit</button>
        </div>
        {favoriteList && <Favorites favorites={favoriteList} />}
      </div>
    </div>
  );
};

export default Navigation;
