import React, { createContext, ReactNode, SetStateAction } from "react";
import { useState } from "react";

interface IcontextProps {
    children: ReactNode    
};

interface Icontext {
    botaoAdd: boolean
    botaoEdit: boolean
    botaoCadastro: boolean
    idAtual: string
    placeholder: string
    setBotaoAdd: React.Dispatch<SetStateAction<boolean>>
    setBotaoEdit: React.Dispatch<SetStateAction<boolean>>
    setBotaoCadastro: React.Dispatch<SetStateAction<boolean>>
    setId: React.Dispatch<SetStateAction<string>>
    setPlaceholder: React.Dispatch<SetStateAction<string>>
};

export const BotaoAddContext = createContext<Icontext>({} as Icontext);

export const BotaoAddProvider = ({children}: IcontextProps) => {

    const [botaoAdd, setBotaoAdd] = useState(false)
    const [botaoEdit, setBotaoEdit] = useState(false)
    const [botaoCadastro, setBotaoCadastro] = useState(false)
    const [idAtual, setId] = useState('')
    const [placeholder, setPlaceholder] = useState("")

    return (
        <BotaoAddContext.Provider value={{botaoAdd, botaoEdit, botaoCadastro,
        idAtual, placeholder, setBotaoAdd, setBotaoEdit, setBotaoCadastro,
        setId, setPlaceholder}}>
            {children}
        </BotaoAddContext.Provider>
    )
}