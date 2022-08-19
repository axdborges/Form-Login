import React, { createContext, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import api from '../../services/api'

interface Icontext {
    children:   ReactNode    
};

interface IUser {
    avatar_url?: string
    bio: string
    course_module: string
    created_at: Date
    email: string
    id: string
    name: string
    techs: Array<string>
    updated_at?: Date
    works: Array<string>
}

interface IcontextProps {
    user: IUser | (() => IUser) | undefined
    userId: string
    loading: boolean
    setUser: React.Dispatch<SetStateAction<IUser | undefined>>
    setUserId: React.Dispatch<SetStateAction<string>>
    setLoading: React.Dispatch<SetStateAction<boolean>>
};


export const LoginContext = createContext<IcontextProps>({} as IcontextProps);

export const LoginProvider = ({children}: Icontext) => {

    const [user, setUser] = useState<IUser>();
    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(true);

    return (
        <LoginContext.Provider value={{user, userId, loading, 
        setUser, setUserId, setLoading}}>
            {children}
        </LoginContext.Provider>
    );
};

