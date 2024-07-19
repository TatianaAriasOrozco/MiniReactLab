import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import english from '../locales/en.json';
import spanish from '../locales/es.json';

// Crear el contexto
export const I18nContext = createContext();

// Crear el proveeedor del contexto
export const I18nContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const locales = { en: english, es: spanish };

  const changeLanguage = (key) => {
    if (key === 'en' || key === 'es') {
      //console.log('change language to -> ', key);
      setLanguage(key);
    } else console.log('Error: language invalid -> ', key);
  };

  const t = (key) => {
    return locales[language][key] || key;
  };
  return (
    <I18nContext.Provider value={{ t, changeLanguage, language }}>
      {children}
    </I18nContext.Provider>
  );
};

I18nContextProvider.propTypes = {
  children: PropTypes.node,
};
