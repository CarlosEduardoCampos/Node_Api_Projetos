import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Qual padrão de tela inicia o site
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Mudando o estilo de tema:
    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return(
        <DrawerContext.Provider value={{ isDrawerOpen: isDrawerOpen, toggleDrawerOpen: toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};