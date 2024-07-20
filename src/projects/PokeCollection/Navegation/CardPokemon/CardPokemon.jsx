import styles from '../CardPokemon/pokemoncard.module.css';
import { NavigationContext } from '../../../../contexts/NavigationContext';
import { useContext } from 'react';

export default function CardPokemon({ size, name, id, img, types }) {

  const { setSearchTerm, setHasSubmit } = useContext(NavigationContext);

  const handleClickCard = () => {
    setSearchTerm(name);
    setHasSubmit(true);
  }

  return (
    <div className={`${styles.cardPokemon} ${styles[size]}`} onClick={handleClickCard}>
      <section className={styles.cardHeader}>
        <h2 className={styles.pokemonName}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <p className={styles.pokemonId}>#00{id}</p>
      </section>
      <img src={img} alt="" className={styles.pokemonImage} />
      <div className={styles.typesContent}>
        {types.map((typeInfo) => (
          <span
            key={Math.random()}
            className={`${styles.type} ${styles[typeInfo]}`}
          >
            {typeInfo}
          </span>
        ))}
      </div>
    </div>
  );
}
