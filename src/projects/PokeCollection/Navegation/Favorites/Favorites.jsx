import { useEffect, useState } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import { URL_BASE } from '../../api/config';

const Favorites = ({ favorites }) => {
  return <div>{JSON.stringify(favorites)}</div>;
};

export default Favorites;
