import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import CardPokemon from '../CardPokemon/CardPokemon';

export function Search({ username, fetchFavorites, onFavorite, favoriteList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [activeFavorite, setActiveFavorite] = useState(null);
  const { data: pokemon, loading, error, fetchData: getPokemon } = useFetch();
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedPokemon(pokemon);
    setHasSubmit(true);
    console.log('searchedPokemon', searchedPokemon, pokemon);
  };

  useEffect(() => {
    if (hasSubmit && searchTerm) {
      getPokemon(`https:pokeapi.co/api/v2/pokemon/${searchTerm}`, {}, //options
        (pokemon) => {
          //Verificar si el pokemon ya esta en la lista de favoritos
          const isFavorite = favoriteList.find(
            (poke) => poke.id === pokemon.id);
          console.log(`${pokemon.name} ${isFavorite ? 'Es favorito' : 'NO es favorito'}`);
          setActiveFavorite(isFavorite);
          console.log(`boton ActiveFavorite: ${isFavorite ? 'Es favorito' : 'NO es favorito'}`);
        }
      );
    }
    return () => {
      setHasSubmit(false);
    };
  }, [hasSubmit]);

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
    if (searchTerm !== '' && searchTerm) setActiveFavorite(!activeFavorite);
    if (pokemon) onFavorite(pokemon);
    console.log('click', activeFavorite);
  };

  // const handleClickCard = (pokeName) => {
  //   setSearchTerm(pokeName);
  //   setHasSubmit(true);
  // }

  let starSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="#3B76F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
          <CardPokemon
            key={pokemon.id}
            size={'big'}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.sprites.other['official-artwork'].front_default}
            types={pokemon.types.map((typeInfo) => typeInfo.type.name)}
          />
          <div className={styles.pokemonStats}>
            <div className={styles.statFooter}>
              <div className={styles.stat}>
                <img src="src/assets/weight.svg" alt="weighticon" />
                <span>{pokemon.weight / 10} kg</span>
              </div>
              <p>Weight</p>
            </div>
            <img src="src/assets/line.svg" alt="" />
            <div className={styles.statFooter}>
              <div className={styles.stat}>
                <img src="src/assets/height.svg" alt="heighticon" />
                <span>{pokemon.height / 10} m</span>
              </div>
              <p>Height</p>
            </div>
          </div>
        </div>
      )}

      <button onClick={handleFavorite} className={styles.favoriteButton}>
        <span className={activeFavorite ? styles.isFavorite : ''}>
          {starSvg}
        </span>
        <span className={styles.favoriteLabel}>
          {activeFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </span>
      </button>
    </div>
  );
}
