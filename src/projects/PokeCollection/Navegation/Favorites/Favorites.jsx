import { useEffect, useState } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';
import CardPokemon from '../CardPokemon/CardPokemon';
import styles from './Favorites.module.css';

const Favorites = ({ favorites }) => {
  return (
    <div className={styles.content}>
      {favorites.map((pokemon) => (
        <CardPokemon
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          img={pokemon.avatarUrl}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default Favorites;
