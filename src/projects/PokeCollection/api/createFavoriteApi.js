import { URL_BASE } from './config.js';

const createFavoriteApi = (username, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.3.0',
    },
    body: JSON.stringify(body),
  };
  const url = `${URL_BASE}/api/${username}/favorites`;
  const data = fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));

  return data;
};
export { createFavoriteApi };

//tests

createFavoriteApi('frandux', {
  id: 9,
  name: 'pikachu',
  types: ['electrico'],
  avatarUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
});
