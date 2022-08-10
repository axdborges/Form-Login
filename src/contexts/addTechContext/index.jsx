import { createContext } from "react";
import { useState } from "react";

export const BotaoAddContext = createContext();

export const BotaoAddProvider = ({children}) => {

    const [botaoAdd, setBotaoAdd] = useState(false)
    const [botaoEdit, setBotaoEdit] = useState(false)
    const [idAtual, setId] = useState('')
    const [botaoCadastro, setBotaoCadastro] = useState(false)
    const [placeholder, setPlaceholder] = useState("")

    return (
        <BotaoAddContext.Provider value={{botaoAdd, setBotaoAdd, 
        botaoEdit, setBotaoEdit, idAtual, setId,
        botaoCadastro, setBotaoCadastro, placeholder, setPlaceholder}}>
            {children}
        </BotaoAddContext.Provider>
    )
}