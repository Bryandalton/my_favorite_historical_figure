import { useState, createContext } from "react";


const AppContext= createContext()

const AppProvider = ({children}) => {
    const [mode, setMode] = useState('figure')

    return(
        <AppContext.Provider value={{mode, setMode}}>
            {children}
        </AppContext.Provider>
    );
}
 export {AppProvider, AppContext}