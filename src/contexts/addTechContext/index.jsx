import { createContext } from "react";
import { useState } from "react";

export const BotaoAddContext = createContext();

export const BotaoAddProvider = ({children}) => {

    const [botaoAdd, setBotaoAdd] = useState(false)
    const [botaoEdit, setBotaoEdit] = useState(false)
    const [idAtual, setId] = useState('')

    return (
        <BotaoAddContext.Provider value={{botaoAdd, setBotaoAdd, 
        botaoEdit, setBotaoEdit, idAtual, setId}}>
            {children}
        </BotaoAddContext.Provider>
    )
}