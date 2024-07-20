import { URL_BASE } from './config.js';

const getFavoritesApi = (username) => {
  const options = {
    method: 'GET',
    headers: { 'User-Agent': 'insomnia/8.3.0' },
  };
  const url = `${URL_BASE}/api/${username}/favorites`;
  //console.log('RECIBO ESTA URL', url);
  const data = fetch(url, options)
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos);
      return datos;
    })
    .catch((err) => console.error(err));

  return data;
};
export { getFavoritesApi };

//tests
getFavoritesApi('frandux');
