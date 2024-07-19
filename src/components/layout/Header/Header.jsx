import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { useContext } from 'react';
import { I18nContext } from '../../../contexts/I18nContext';

const Header = ({ onClickTitle, disabledTitle, currentProjectName }) => {
  const { language, changeLanguage } = useContext(I18nContext);

  return (
    <header className={styles.header}>
      <h1
        onClick={disabledTitle ? () => {} : onClickTitle}
        className={disabledTitle ? '' : styles.title_hover}
      >
        React Showcase
      </h1>
      {currentProjectName === '' || (
        <span className={styles.project_name}>{currentProjectName}</span>
      )}
      <span className={styles.btn_group}>
        <figure className={language === 'en' ? styles.language_active : ''}>
          <img
            onClick={() => changeLanguage('en')}
            src="src/assets/icons/english.png"
            alt="english"
          />
        </figure>
        <figure className={language === 'es' ? styles.language_active : ''}>
          <img
            onClick={() => changeLanguage('es')}
            src="src/assets/icons/spanish.png"
            alt="spanish"
          />
        </figure>
      </span>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onClickTitle: PropTypes.func.isRequired,
  disabledTitle: PropTypes.bool.isRequired,
  currentProjectName: PropTypes.string.isRequired,
};
