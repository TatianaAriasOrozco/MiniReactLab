import { URL_BASE } from './config.js';

const ddeleteFavoriteApi = (username, id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'User-Agent': 'insomnia/8.3.0',
    },
  };
  const url = `${URL_BASE}/api/${username}/favorites/${id}`;
  console.log(url);
  const data = fetch(url, options)
    //.then((response) => response.json()) //la api no retorna respuesta o body
    .then((response) => console.log(response))
    .catch((err) => console.error('error AQUI!', err));

  return data;
};
export { ddeleteFavoriteApi };

//tests

const username = 'frandux';
const id = 9;
ddeleteFavoriteApi(username, id);
