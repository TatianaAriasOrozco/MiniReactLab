import { URL_BASE } from './config.js';

const resetFavoritesApi = (username) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.3.0',
    },
  };
  const url = `${URL_BASE}/api/${username}/reset`;
  console.log(url);
  const data = fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log('API RESET:', response);
      return response;
    })
    .catch((err) => console.error(err));

  return data;
};
export { resetFavoritesApi };

//tests

//cambiar color
const username = 'frandux';

resetFavoritesApi(username);
