import useLocalStorage from '../../hooks/useLocalStorage';
import Login from './Navegation/Login/Login';
import Navegation from './Navegation/Navegation';

const PokeCollection = () => {
  //   const { data: pokemon, loading, error } = useGetPokemon('bulbasaur');
  const [username, setUsername] = useLocalStorage('username', '');
  // use EFECT que te traiga el usuario de los pokemones favoritos
  console.log(username);
  return (
    <>
      {username ? (
        <Navegation username={username} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </>
  );
};
export default PokeCollection;
