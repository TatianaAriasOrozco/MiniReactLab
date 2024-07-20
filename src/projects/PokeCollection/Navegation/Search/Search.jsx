import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';
import useLocalStorage from '../../../../hooks/useLocalStorage';

export function Search({ username, fetchFavorites, onFavorite, favoriteList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [activeFavorite, setActiveFavorite] = useState(null);
  const { data: pokemon, loading, error, fetchData: getPokemon } = useFetch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedPokemon(pokemon);
    console.log('searchedPokemon', searchedPokemon, pokemon);
  };

  /* ------------------------FRANKS-------------------------------- */
  useEffect(() => {
    if (searchTerm)
      getPokemon(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`,
        {}, //options
        (pokemon) => {
          //Verificar si el pokemon ya esta en la lista de favoritos
          const isFavorite = favoriteList.find(
            (poke) => poke.id === pokemon.id
          );
          console.log(
            `${pokemon.name} ${isFavorite ? 'Es favorito' : 'NO es favorito'} `
          );
          setActiveFavorite(isFavorite);
          console.log(
            `boton ActiveFavorite: ${
              isFavorite ? 'Es favorito' : 'NO es favorito'
            }`
          );
        }
      );
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

  const deleteFavorite = async () => {
    const url = `${URL_BASE}/api/${username}/favorites/${pokemon.id}`;

    const options = {
      method: 'DELETE',
      headers: { 'User-Agent': 'insomnia/2023.5.8' },
    };
    await fetchFavorites(url, options);
  };

  // se hizo un cambio con el boton agregar favoritos
  useEffect(() => {
    console.log(activeFavorite, ': useEffect => activeFavorite:');
    if (pokemon && activeFavorite !== undefined && activeFavorite !== null) {
      if (activeFavorite) {
        console.log('Realizar fetch - createFavorite');
        createFavorite();
      } else {
        console.log('Realizar fetch - deleteFavorite');
        deleteFavorite();
      }
    }
  }, [activeFavorite]);

  const handleFavorite = () => {
    setActiveFavorite(!activeFavorite);
    if (pokemon) onFavorite(pokemon);
    console.log('click', activeFavorite);
  };
  /* ------------------------FRANKS---------------------------- */

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
