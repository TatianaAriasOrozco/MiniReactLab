import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValues = '') {
  const localData = localStorage.getItem(key);

  const [value, setValue] = useState(
    localData ? JSON.parse(localData) : initialValues
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
