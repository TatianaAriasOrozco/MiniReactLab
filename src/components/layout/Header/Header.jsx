import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { useContext } from 'react';
import { I18nContext } from '../../../contexts/I18nContext';

const Header = ({ onClickTitle, disabledTitle }) => {
  const { changeLanguage, t } = useContext(I18nContext);
  return (
    <header className={styles.header}>
      <h1
        onClick={disabledTitle ? () => {} : onClickTitle}
        className={disabledTitle ? '' : styles.title_hover}
      >
        React Showcase
      </h1>
      <p style={{ fontSize: '20px' }}>{t('next-player')}</p>
      <span className={styles.btn_group}>
        <img
          onClick={() => changeLanguage('en')}
          src="src/assets/icons/english.png"
          alt="english"
          className={styles.english}
        />
        <img
          onClick={() => changeLanguage('es')}
          src="src/assets/icons/spanish.png"
          alt="spanish"
          className={styles.spanish}
        />
      </span>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onClickTitle: PropTypes.func.isRequired,
  disabledTitle: PropTypes.bool.isRequired,
};
