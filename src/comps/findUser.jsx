import { useContext } from "react"
import { AppContext } from "./global/searchContext"
import { users } from "./data"

export const findUser = () => {
    const { name } = useContext(AppContext)
    
    const user = users.find((user) => user.firstname === name)
    return user
}