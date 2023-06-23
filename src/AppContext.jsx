import { useState, createContext } from "react";


const AppContext= createContext()

const AppProvider = ({children}) => {
    const [mode, setMode] = useState('figures')

    return(
        <AppContext.Provider value={{mode, setMode}}>
            {children}
        </AppContext.Provider>
    );
}
 export {AppProvider, AppContext}