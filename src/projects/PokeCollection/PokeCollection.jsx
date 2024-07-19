
import { useState, useEffect } from "react";
import Login from "./Navegation/Login/Login";
import Navegation from "./Navegation/Navegation";

const PokeCollection = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (localStorage.getItem('username'))
      setUserName(localStorage.getItem('username'))
  }, []);
  return (
    <>
      {userName ?
        <Navegation
          userName={userName}
          setUserName={setUserName}
        /> : <Login
          setUserName={setUserName}
        />
      }
    </>

  )

// import Button from '../../components/common/Button/Button';
// import { useGetFavorites } from './hooks/useGetFavorites';
// import { useGetPokemon } from './hooks/useGetPokemon';

// const PokeCollection = () => {
//   //const {data, loading, error}
//   const { data: pokemon, loading, error } = useGetPokemon('bulbasaur');
//   const { data: favorites, loading1, error1 } = useGetFavorites('testino');

//   return (
//     <div>
//       <Button onClick={() => console.log(pokemon)}>Get Pokemon</Button>
//       <br />
//       <Button onClick={() => console.log(favorites)}>Get Favorites</Button>
//       <br />
//       <button onClick={() => {}}>Create Favorite</button>
//       <br />
//       <button onClick={() => {}}>Delete Favorite</button>
//       <br />
//       <Button onClick={() => {}} variant="destructive">
//         Reset
//       </Button>
//     </div>
//   );
// >>>>>>> main
};

export default PokeCollection;
