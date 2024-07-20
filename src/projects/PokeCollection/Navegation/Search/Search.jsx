import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';
import useLocalStorage from '../../../../hooks/useLocalStorage';

export function Search({ username }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [activeFavorite, setActiveFavorite] = useState(false);
  const { data, loading, error, fetchData } = useFetch();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedPokemon(data);
    return;
  };

  useEffect(() => {
    if (searchTerm != '') {
      const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
      console.log('url', url);
      fetchData(url);

      if (!error) {
        setSearchedPokemon(data);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log(username);
    if (activeFavorite) {
      console.log('click activado favoritos');
      const url = `${URL_BASE}/api/${username}/favorites`;
      const body = {
        id: searchedPokemon.id,
        name: searchedPokemon.name,
        types: searchedPokemon.types.map((typeInfo) => typeInfo.type.name),
        avatarUrl: searchedPokemon.sprites.front_default,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };
      fetch(url, options);
    } else {
      const url = `${URL_BASE}/api/${username}/favorites/${searchedPokemon.id}`;
      const options = {
        method: 'DELETE',
        headers: { 'User-Agent': 'insomnia/2023.5.8' },
      };
      fetch(url, options);
    }
  }, [activeFavorite]);

  const handleFavorite = () => {
    setActiveFavorite(!activeFavorite);
    console.log(activeFavorite);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchedPokemon && (
        <div className={styles.pokemonCard}>
          <h2 className={styles.pokemonName}>{searchedPokemon.name}</h2>
          <p className={styles.pokemonId}>
            #{searchedPokemon.id.toString().padStart(3, '0')}
          </p>
          <img
            src={searchedPokemon.sprites.front_default}
            alt={searchedPokemon.name}
            className={styles.pokemonImage}
          />
          <div className={styles.pokemonTypes}>
            {searchedPokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className={`${styles.type} ${styles[typeInfo.type.name]}`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
          <div className={styles.pokemonStats}>
            <div className={styles.stat}>
              <span>{searchedPokemon.weight / 10} kg</span>
            </div>
            <div className={styles.stat}>
              <span>{searchedPokemon.height / 10} m</span>
            </div>
          </div>
          <button onClick={handleFavorite} className={styles.favoriteButton}>
            Hug x Hug Add to Favorites
          </button>
        </div>
      )}
    </div>
  );
}
