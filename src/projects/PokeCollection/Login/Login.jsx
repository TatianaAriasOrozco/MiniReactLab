import styles from './Login.module.css';
import Button from '../../../components/common/Button/Button';
import { useRef, useContext } from 'react';
import pokeapiLogo from '../../../assets/pokeapi.png';
import { I18nContext } from '../../../contexts/I18nContext';


const Login = ({ setUsername }) => {
  const { t } = useContext(I18nContext);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputRef.current.value) return;
    console.log(inputRef.current.value);
    setUsername(inputRef.current.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <header className={styles.headerPokeApi}>
          <img
            src={pokeapiLogo}
            alt="PokeAPI Logo"
            className={styles.pokeImage}
          />
        </header>
        <div className={styles.cardBody}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              ref={inputRef}
              className={styles.input}
              id="username"
              name="username"
              type="text"
              placeholder={t('username')}
            />
            <button className={styles.button} type="submit">
              {t('enter')}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
