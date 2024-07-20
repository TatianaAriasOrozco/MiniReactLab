import styles from './Login.module.css';
import { useRef } from 'react';
import pokeapiLogo from '../../../../assets/pokeapi.png';

const Login = ({ setUserName }) => {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputRef.current.value) return;
    setUserName(inputRef.current.value);
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
              placeholder="Username"
            />
            <button className={styles.button} type="submit">
              Enter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
