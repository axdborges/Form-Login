import { createContext } from "react";
import { useState } from "react";
import api from '../../services/api'

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState("")
    const [loading, setLoading] = useState(true)
    // const [botaoAdd, setBotaoAdd] = useState(false)

    return (
        <LoginContext.Provider value={{user, userId, setUser, 
        setUserId, loading, setLoading}}>
            {children}
        </LoginContext.Provider>
    )
}

