import styles from '../CardPokemon/pokemoncard.module.css';

export default function CardPokemon({ name, id, img, types }) {
  return (
    <div className={styles.cardPokemon}>
      <section className={styles.cardHeader}>
        <h2 className={styles.pokemonName}>{name}</h2>
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
