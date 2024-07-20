import Login from './Login/Login';
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './PokeCollection.module.css';
import Navegation from './Navegation/Navegation';
const PokeCollection = () => {
  const [username, setUsername] = useLocalStorage('username');

  return (
    <div className={styles.content}>
      {username === '' ? (
        <Login setUsername={setUsername} />
      ) : (
        <Navegation username={username} setUsername={setUsername} />
      )}
    </div>
  );
};
export default PokeCollection;
