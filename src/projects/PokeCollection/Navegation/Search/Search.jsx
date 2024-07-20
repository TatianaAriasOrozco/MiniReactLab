import React, { useState } from 'react';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import styles from './Search.module.css';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const { data, loading, error } = useGetPokemon(searchedPokemon);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedPokemon(searchTerm.toLowerCase());
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
      {data && (
        <div className={styles.pokemonCard}>
          <h2 className={styles.pokemonName}>{data.name}</h2>
          <p className={styles.pokemonId}>
            #{data.id.toString().padStart(3, '0')}
          </p>
          <img
            src={data.image}
            alt={data.name}
            className={styles.pokemonImage}
          />
          <div className={styles.pokemonTypes}>
            {data.types.map((type) => (
              <span key={type} className={`${styles.type} ${styles[type]}`}>
                {type}
              </span>
            ))}
          </div>
          <div className={styles.pokemonStats}>
            <div className={styles.stat}>
              <span>{data.weight / 10} kg</span>
            </div>
            <div className={styles.stat}>
              <span>{data.height / 10} m</span>
            </div>
          </div>
          <button className={styles.favoriteButton}>
            Hug x Hug Add to Favorites
          </button>
        </div>
      )}
    </div>
  );
}
