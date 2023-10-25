import { useContext, useEffect } from "react"
import { AppContext } from "./global/searchContext"

export const SearchBar = () => {
    const { name, setName } = useContext(AppContext)
    
    const submitHandler = (e) => {
        e.preventDefault()
        setName(e.target.searchBar.value)
    }
    useEffect(() => {
    }, [name])


    return(
        <form onSubmit={(e) => submitHandler(e)}>
            <input name="searchBar" type="text" placeholder="search User" />
        </form>
    )
}