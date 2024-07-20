import { createContext, useState } from 'react';

// Crear el contexto
export const NavigationContext = createContext();

// Crear el proveeedor del contexto
export const NavigationContextProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [hasSubmit, setHasSubmit] = useState(false);

    const changeSearchTherm = (pokeName) => {
        setSearchTerm(pokeName);
        setHasSubmit(true);
    };

    return (
        <NavigationContext.Provider value={{ searchTerm, setSearchTerm, hasSubmit, setHasSubmit }}>
            {children}
        </NavigationContext.Provider>
    );
};
