import useLocalStorage from '../../hooks/useLocalStorage';
import Login from './Navegation/Login/Login';
import Navegation from './Navegation/Navegation';

const PokeCollection = () => {
  //   const { data: pokemon, loading, error } = useGetPokemon('bulbasaur');
  const [userName, setUserName] = useLocalStorage('username', '');
  // use EFECT que te traiga el usuario de los pokemones favoritos
  return (
    <>
      {userName ? (
        <Navegation userName={userName} setUserName={setUserName} />
      ) : (
        <Login setUserName={setUserName} />
      )}
    </>
  );
};
export default PokeCollection;
