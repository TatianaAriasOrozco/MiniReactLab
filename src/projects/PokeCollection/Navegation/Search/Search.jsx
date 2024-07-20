import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';
import useLocalStorage from '../../../../hooks/useLocalStorage';

export function Search({ username, fetchFavorites, onFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [activeFavorite, setActiveFavorite] = useState(false);
  const { data: pokemon, loading, error, fetchData: getPokemon } = useFetch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedPokemon(pokemon);
    console.log('searchedPokemon', searchedPokemon, pokemon);
  };

  useEffect(() => {
    if (searchTerm)
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
  }, [searchTerm]);

  const createFavorite = async () => {
    const url = `${URL_BASE}/api/${username}/favorites`;
    const body = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((typeInfo) => typeInfo.type.name),
      avatarUrl: pokemon.sprites.front_default,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    await fetchFavorites(url, options);
  };
  useEffect(() => {}, [activeFavorite]);

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
      {pokemon && (
        <div className={styles.pokemonCard}>
          <h2 className={styles.pokemonName}>{pokemon.name}</h2>
          <p className={styles.pokemonId}>
            #{pokemon.id.toString().padStart(3, '0')}
          </p>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className={styles.pokemonImage}
          />
          <div className={styles.pokemonTypes}>
            {pokemon.types.map((typeInfo) => (
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
              <span>{pokemon.weight / 10} kg</span>
            </div>
            <div className={styles.stat}>
              <span>{pokemon.height / 10} m</span>
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
