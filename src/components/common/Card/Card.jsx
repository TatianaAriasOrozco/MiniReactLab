import styles from './Card.module.css';

const Card = ({ onClick, image, title, buttons }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          onClick={handleClick}
          src={image}
          alt={title}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <h3 onClick={handleClick} className={styles.cardTitle}>
          {title}
        </h3>
      </div>
      <div className={styles.cardFooter}>
        {buttons.map((button, index) => (
          <span key={index} className={styles.cardButton}>
            {button}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
