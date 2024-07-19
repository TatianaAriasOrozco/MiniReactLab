import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, buttons }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardFooter}>
        {buttons.map((button, index) => (
          <button key={index} className={styles.cardButton}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;