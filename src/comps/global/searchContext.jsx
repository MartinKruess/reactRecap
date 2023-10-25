import { createContext, useState } from "react"

export const AppContext = createContext()

export const SearchProvider = ({children}) => {
    const [name, setName] = useState('')

    return(
        <AppContext.Provider value={{name, setName}}>
            { children }
        </AppContext.Provider>
    )
}